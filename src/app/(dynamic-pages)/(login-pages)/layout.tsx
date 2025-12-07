import { ClientLayout } from '@/app/ClientLayout';

export default function LoginPagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            <ClientLayout>{children}</ClientLayout>
            {/* No Footer for login pages */}
        </div>
    );
}

