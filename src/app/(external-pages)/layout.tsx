import { ClientLayout } from '@/app/ClientLayout';
import { ExternalNavigation } from '@/app/Navbar';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex pt-2 flex-col min-h-screen bg-white dark:bg-gray-900">
      <ClientLayout>
        <ExternalNavigation />
        <div className="max-w-xl">{children}</div>
      </ClientLayout>
      <Footer />
    </div>
  );
}
