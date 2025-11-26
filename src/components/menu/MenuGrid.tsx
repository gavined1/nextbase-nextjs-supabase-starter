'use client';

import { MenuItemCard } from './MenuItemCard';
import type { MenuItemWithCategory } from './types';

interface MenuGridProps {
    items: MenuItemWithCategory[];
    title?: string;
    showSeeAll?: boolean;
    onItemClick: (item: MenuItemWithCategory) => void;
}

export function MenuGrid({ items, title = 'Menu', onItemClick }: MenuGridProps) {
    if (items.length === 0) {
        return (
            <div className="px-5 py-24 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center">
                    <span className="text-4xl">🍽️</span>
                </div>
                <p className="text-gray-900 text-lg font-medium">No dishes found</p>
                <p className="text-gray-400 mt-2">Try a different search or category</p>
            </div>
        );
    }

    return (
        <main className="px-5 py-6">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <span className="text-sm text-gray-400 font-medium">{items.length} items</span>
            </div>

            {/* Grid - 2 columns on mobile, responsive on larger screens */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {items.map((item) => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        onItemClick={onItemClick}
                    />
                ))}
            </div>
        </main>
    );
}
