import { auth } from '@/app/auth'
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import AnalyticsClient from './analytics-client'
import { redirect } from 'next/navigation'
import { isAdminEmail, hasAdminEmailsConfigured } from '@/lib/admin-utils'

export default async function AnalyticsPage() {
  const session = await auth()

  // Check if user is authenticated
  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }

  // Check if admin emails are configured
  if (!hasAdminEmailsConfigured()) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-background border border-destructive rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-6">
          <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Configuration Error</h2>
            <p className="text-muted-foreground">Admin emails not configured. Please contact your system administrator.</p>
          </div>
        </div>
      </div>
    )
  }

  // Check if user is admin
  if (!isAdminEmail(session.user.email)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-background border border-destructive rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-6">
          <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Access Denied</h2>
            <p className="text-muted-foreground">You don&apos;t have permission to access this page. Admin access required.</p>
          </div>
          <Button onClick={() => window.location.href = '/'} className="w-full">
            Return to Home
          </Button>
        </div>
      </div>
    )
  }

  // User is authenticated and is admin, render the analytics dashboard
  return <AnalyticsClient />
}
