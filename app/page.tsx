import { auth, signIn, signOut } from "./auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart3, LogOut, LogIn } from "lucide-react";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-50 via-primary-100 to-secondary-300 dark:from-base-950 dark:via-base-800 dark:to-base-800 flex items-center justify-center">
      <div className="w-full max-w-md">
        {session?.user ? (
          <div className="bg-background border border-border rounded-xl shadow-lg p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back!</h1>
              <p className="text-muted-foreground">Hello, {session.user.name}</p>
            </div>
            
            <div className="space-y-4">
              <Link href="/analytics" className="block">
                <Button className="w-full bg-primary hover:bg-primary-800 text-primary-foreground">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Analytics Dashboard
                </Button>
              </Link>
              
              <form action={async () => { 'use server'; await signOut(); }}>
                <Button variant="outline" className="w-full border-destructive/20 text-destructive hover:bg-destructive/10">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-background border border-border rounded-xl shadow-lg p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-2">MCP OAuth Server</h1>
              <p className="text-muted-foreground">Sign in to access your analytics dashboard</p>
            </div>
            
            <form action={async () => { 'use server'; await signIn('google'); }}>
              <Button className="w-full bg-primary hover:bg-primary-800 text-primary-foreground">
                <LogIn className="w-5 h-5 mr-2" />
                Sign in with Google
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
