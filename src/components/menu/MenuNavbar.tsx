'use client';

import { Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { MenuClient } from './types';

interface MenuNavbarProps {
    client: MenuClient;
    onInfoClick?: () => void;
}

export function MenuNavbar({ client, onInfoClick }: MenuNavbarProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = 300;

            if (currentScrollY <= heroHeight) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-4 py-3 transition-all duration-300 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-full pointer-events-none'
                }`}
        >
            <button
                onClick={onInfoClick}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all active:scale-95 bg-white/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-white/50 hover:shadow-[0_4px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.5)]"
                style={{
                    WebkitBackdropFilter: 'blur(40px) saturate(1.5)',
                }}
            >
                <span className="font-semibold text-gray-900/90">
                    {client.name}
                </span>
                <Info className="w-4 h-4 text-gray-600/80" />
            </button>
        </nav>
    );
}
