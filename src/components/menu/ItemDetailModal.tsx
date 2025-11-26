'use client';

import { Calendar, ChefHat, Clock, Flame, Leaf, Sparkles, Star, X } from 'lucide-react';
import Image from 'next/image';
import { Drawer } from 'vaul';
import type { MenuItemBadgeType, MenuItemWithCategory } from './types';

interface ItemDetailModalProps {
    item: MenuItemWithCategory | null;
    isOpen: boolean;
    onClose: () => void;
}

const badgeConfig: Record<MenuItemBadgeType, { icon: typeof Leaf; color: string; bg: string; label: string }> = {
    vegan: { icon: Leaf, color: 'text-emerald-700', bg: 'bg-emerald-50', label: 'Vegan' },
    vegetarian: { icon: Leaf, color: 'text-green-700', bg: 'bg-green-50', label: 'Vegetarian' },
    spicy: { icon: Flame, color: 'text-red-600', bg: 'bg-red-50', label: 'Spicy' },
    gluten_free: { icon: Sparkles, color: 'text-amber-700', bg: 'bg-amber-50', label: 'Gluten Free' },
    new: { icon: Sparkles, color: 'text-indigo-600', bg: 'bg-indigo-50', label: 'New' },
    best_seller: { icon: Star, color: 'text-orange-600', bg: 'bg-orange-50', label: 'Popular' },
    chef_special: { icon: ChefHat, color: 'text-violet-600', bg: 'bg-violet-50', label: "Chef's Pick" },
    seasonal: { icon: Calendar, color: 'text-cyan-600', bg: 'bg-cyan-50', label: 'Seasonal' },
};

export function ItemDetailModal({ item, isOpen, onClose }: ItemDetailModalProps) {
    if (!item) return null;

    return (
        <Drawer.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60" />
                <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-[2rem] bg-white max-h-[92vh] outline-none overflow-hidden">
                    {/* Image - starts at the very top */}
                    <div className="relative aspect-square w-full flex-shrink-0 max-h-[45vh]">
                        {item.image_url ? (
                            <Image
                                src={item.image_url}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                                <span className="text-6xl">🍽️</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                        {/* Drag Handle - overlaid on image */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-white/50" />

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-4 p-2 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        {/* Badges on image */}
                        {item.badges && item.badges.length > 0 && (
                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                {item.badges.map((badge) => {
                                    const config = badgeConfig[badge];
                                    const Icon = config.icon;
                                    return (
                                        <span
                                            key={badge}
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium ${config.color}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {config.label}
                                        </span>
                                    );
                                })}
                            </div>
                        )}

                        {/* Price badge */}
                        <div className="absolute bottom-4 right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                            <span className="text-xl font-bold text-gray-900">
                                ${item.price.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
                        {/* Header */}
                        <div className="space-y-1">
                            <Drawer.Title className="text-2xl font-bold text-gray-900">
                                {item.name}
                            </Drawer.Title>
                            {item.category && (
                                <Drawer.Description className="text-gray-500">
                                    {item.category.name}
                                </Drawer.Description>
                            )}
                        </div>

                        {/* Meta info */}
                        {(item.rating || item.prep_time_minutes) && (
                            <div className="flex items-center gap-3">
                                {item.rating && (
                                    <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2.5 rounded-full">
                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        <span className="font-semibold">{item.rating}</span>
                                        {item.rating_count && (
                                            <span className="text-amber-600/70">({item.rating_count}+)</span>
                                        )}
                                    </div>
                                )}
                                {item.prep_time_minutes && (
                                    <div className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2.5 rounded-full">
                                        <Clock className="w-4 h-4" />
                                        <span className="font-medium">{item.prep_time_minutes} min</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Description */}
                        {item.description && (
                            <div className="space-y-2">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    About this dish
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        )}

                        {/* Dietary info */}
                        {item.badges && item.badges.length > 0 && (
                            <div className="space-y-2 pt-2 border-t border-gray-100">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Dietary Information
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {item.badges.map((badge) => {
                                        const config = badgeConfig[badge];
                                        const Icon = config.icon;
                                        return (
                                            <div
                                                key={badge}
                                                className={`inline-flex items-center gap-2 px-4 py-2.5 ${config.bg} rounded-xl`}
                                            >
                                                <Icon className={`w-5 h-5 ${config.color}`} />
                                                <span className={`font-medium ${config.color}`}>
                                                    {config.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}
