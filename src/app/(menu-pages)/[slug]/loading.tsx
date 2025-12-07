import { Spinner } from '@/components/ui/spinner';

// Loading circle shown while the page route is being generated
export default function MenuLoading() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <Spinner className="size-8 text-gray-400" />
        </div>
    );
}

