import { ClientLayout } from '@/app/ClientLayout';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/logos/angkor-menu-favicon.png',
  },
  title: 'Angkor Menu - Digital Catalogs for Any Business',
  description:
    'Create beautiful digital menus and catalogs for your business. QR code ready, mobile-first, and easy to customize.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <ClientLayout>{children}</ClientLayout>
      <Footer />
    </div>
  );
}
