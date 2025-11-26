import { ClientLayout } from '@/app/ClientLayout';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/images/logo-black-main.ico',
  },
  title: 'Nextbase Open source',
  description: 'Nextbase Open source',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex pt-2 flex-col min-h-screen bg-white dark:bg-gray-900">
      <ClientLayout>{children}</ClientLayout>
      <Footer />
    </div>
  );
}
