'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export function ConditionalFooter() {
  const pathname = usePathname();
  const isLoginPage = pathname?.includes('/login') || 
                      pathname?.includes('/sign-up') || 
                      pathname?.includes('/forgot-password') ||
                      pathname?.includes('/update-password');

  if (isLoginPage) {
    return null;
  }

  return <Footer />;
}

