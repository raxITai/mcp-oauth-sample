import { auth } from '@/app/auth';
import { prisma } from '@/app/prisma';
import { redirect } from 'next/navigation';
import { randomBytes } from 'crypto';
import { headers } from 'next/headers';

export default async function AuthorizePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await auth();

  const params = await searchParams;

  const clientId = params.client_id as string;
  const redirectUri = params.redirect_uri as string;
  const responseType = params.response_type as string;
  const state = params.state as string;
  const code_challenge = params.code_challenge as string | undefined;
  const code_challenge_method = params.code_challenge_method as string | undefined;
  const resource = params.resource as string | undefined;

  // Enhanced logging for debugging
  console.log('[OAuth Authorize] Request params:', {
    clientId,
    redirectUri,
    responseType,
    state,
    code_challenge: code_challenge ? 'present' : 'missing',
    code_challenge_method,
    resource
  });

  if (!session || !session.user || !session.user.id) {
    const headersList = await headers();
    const host = headersList.get('host');
    const prot = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${prot}://${host}`;

    const loginUrl = new URL('/api/auth/signin', baseUrl);
    const callbackUrl = new URL('/oauth/authorize', baseUrl);

    // Add all current search params to the callback URL
    Object.entries(params).forEach(([key, value]) => {
      if (typeof value === 'string') {
        callbackUrl.searchParams.set(key, value);
      }
    });

    loginUrl.searchParams.set('callbackUrl', callbackUrl.toString());
    return redirect(loginUrl.toString());
  }

  if (!clientId || !redirectUri || responseType !== 'code') {
    console.log('[OAuth Authorize] Invalid request parameters:', {
      clientId: !!clientId,
      redirectUri: !!redirectUri,
      responseType
    });
    
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p>Invalid authorization request.</p>
          <p className="text-xs text-gray-500 mt-4">
            Missing client_id, redirect_uri, or response_type is not &apos;code&apos;.
          </p>
        </div>
      </main>
    );
  }

  const client = await prisma.client.findUnique({
    where: { clientId },
  });

  // Enhanced error logging
  if (!client) {
    console.log('[OAuth Authorize] Client not found:', clientId);
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p>Client not found.</p>
          <p className="text-xs text-gray-500 mt-4">
            Client ID: {clientId}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Please ensure the client is registered via Dynamic Client Registration.
          </p>
        </div>
      </main>
    );
  }

  if (!client.redirectUris.includes(redirectUri)) {
    console.log('[OAuth Authorize] Redirect URI mismatch:', {
      clientId,
      requestedUri: redirectUri,
      registeredUris: client.redirectUris
    });
    
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p>Invalid redirect URI.</p>
          <p className="text-xs text-gray-500 mt-4">
            Requested: {redirectUri}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Registered URIs: {client.redirectUris.join(', ')}
          </p>
        </div>
      </main>
    );
  }

  async function handleConsent(formData: FormData) {
    'use server';

    const session = await auth();
    if (!session?.user?.id) {
      // This should not be reachable if the user sees the consent screen
      throw new Error('No session found during consent handling.');
    }

    if (!client) throw new Error('Client not found during consent handling.');

    const consent = formData.get('consent');

    const redirectUrl = new URL(redirectUri);
    if (state) {
      redirectUrl.searchParams.set('state', state);
    }

    if (consent === 'deny') {
      redirectUrl.searchParams.set('error', 'access_denied');
      return redirect(redirectUrl.toString());
    }

    const authorizationCode = randomBytes(16).toString('hex');
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.authCode.create({
      data: {
        code: authorizationCode,
        expiresAt,
        clientId: client.id,
        userId: session.user.id,
        redirectUri: redirectUri,
        codeChallenge: code_challenge,
        codeChallengeMethod: code_challenge_method,
        resource: resource,
      },
    });

    redirectUrl.searchParams.set('code', authorizationCode);
    redirect(redirectUrl.toString());
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-50 via-primary-100 to-secondary-300 dark:from-base-950 dark:via-base-800 dark:to-base-800 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-background border border-border rounded-xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Authorize Application
            </h1>
            <p className="text-muted-foreground mb-4">
              The application{' '}
              <strong className="font-medium text-foreground">{client.name}</strong> is
              requesting access to your account.
            </p>
            <p className="text-sm text-muted-foreground">
              Do you want to grant access?
            </p>
          </div>
          
          <form action={handleConsent} className="space-y-4">
            <button
              type="submit"
              name="consent"
              value="allow"
              className="w-full bg-primary hover:bg-primary-800 text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
            >
              Allow
            </button>
            <button
              type="submit"
              name="consent"
              value="deny"
              className="w-full border border-border text-foreground hover:bg-muted px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-border focus:ring-opacity-50 transition-colors"
            >
              Deny
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 
