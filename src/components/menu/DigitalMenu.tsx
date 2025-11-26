'use client';

import { useCallback, useMemo, useState } from 'react';
import { HeroCarousel } from './HeroCarousel';
import { ItemDetailModal } from './ItemDetailModal';
import { MenuGrid } from './MenuGrid';
import { MenuNavbar } from './MenuNavbar';
import { RestaurantInfoDrawer } from './RestaurantInfoDrawer';
import { SearchAndFilter } from './SearchAndFilter';
import type { MenuData, MenuItemWithCategory } from './types';

interface DigitalMenuProps {
    data: MenuData;
}

export function DigitalMenu({ data }: DigitalMenuProps) {
    const { client, categories, items, featuredItems } = data;
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<MenuItemWithCategory | null>(null);
    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);

    const filteredItems = useMemo(() => {
        let filtered = items as MenuItemWithCategory[];

        // Filter by category
        if (activeCategory && activeCategory !== 'all') {
            filtered = filtered.filter(item => item.category?.slug === activeCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(query) ||
                item.description?.toLowerCase().includes(query) ||
                item.category?.name.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [items, activeCategory, searchQuery]);

    const handleCategoryChange = useCallback((categorySlug: string) => {
        setActiveCategory(categorySlug);
    }, []);

    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query);
    }, []);

    const handleItemClick = useCallback((item: MenuItemWithCategory) => {
        setSelectedItem(item);
        setIsItemModalOpen(true);
    }, []);

    const handleCloseItemModal = useCallback(() => {
        setIsItemModalOpen(false);
        setTimeout(() => setSelectedItem(null), 300);
    }, []);

    const handleOpenInfoDrawer = useCallback(() => {
        setIsInfoDrawerOpen(true);
    }, []);

    const handleCloseInfoDrawer = useCallback(() => {
        setIsInfoDrawerOpen(false);
    }, []);

    // Get title based on active category
    const gridTitle = useMemo(() => {
        if (searchQuery.trim()) {
            return `"${searchQuery}"`;
        }
        if (activeCategory === 'all') {
            return 'All Dishes';
        }
        const category = categories.find(c => c.slug === activeCategory);
        return category?.name || 'Menu';
    }, [activeCategory, searchQuery, categories]);

    return (
        <div className="min-h-screen bg-white">
            {/* Fixed Navbar */}
            <MenuNavbar client={client} onInfoClick={handleOpenInfoDrawer} />

            {/* Hero Carousel */}
            <HeroCarousel featuredItems={featuredItems} />

            {/* Search & Filter */}
            <SearchAndFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                onSearch={handleSearch}
            />

            {/* Menu Grid */}
            <MenuGrid
                items={filteredItems}
                title={gridTitle}
                showSeeAll={false}
                onItemClick={handleItemClick}
            />

            {/* Item Detail Modal */}
            <ItemDetailModal
                item={selectedItem}
                isOpen={isItemModalOpen}
                onClose={handleCloseItemModal}
            />

            {/* Restaurant Info Drawer */}
            <RestaurantInfoDrawer
                client={client}
                isOpen={isInfoDrawerOpen}
                onClose={handleCloseInfoDrawer}
            />
        </div>
    );
}
