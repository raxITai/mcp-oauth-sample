/**
 * Utility functions for admin access control
 */

/**
 * Get the list of admin emails from environment variable
 * Supports both single email and comma-separated multiple emails
 */
export function getAdminEmails(): string[] {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  if (!adminEmail) {
    return [];
  }
  
  // Split by comma and trim whitespace, filter out empty strings
  return adminEmail
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length > 0);
}

/**
 * Check if the given email is an admin email
 */
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) {
    return false;
  }
  
  const adminEmails = getAdminEmails();
  return adminEmails.includes(email.toLowerCase());
}

/**
 * Check if admin emails are configured
 */
export function hasAdminEmailsConfigured(): boolean {
  return getAdminEmails().length > 0;
}