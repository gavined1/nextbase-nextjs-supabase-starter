'use client';

import { Calendar, ChefHat, Clock, Flame, Leaf, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import type { MenuItemBadgeType, MenuItemWithCategory } from './types';

interface MenuItemCardProps {
    item: MenuItemWithCategory;
    onItemClick: (item: MenuItemWithCategory) => void;
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

export function MenuItemCard({ item, onItemClick }: MenuItemCardProps) {
    const primaryBadge = item.badges?.[0];
    const badgeInfo = primaryBadge ? badgeConfig[primaryBadge] : null;
    const BadgeIcon = badgeInfo?.icon;

    return (
        <div
            onClick={() => onItemClick(item)}
            className="group bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 active:scale-[0.98] border border-gray-100"
        >
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
                {item.image_url ? (
                    <Image
                        src={item.image_url}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <span className="text-4xl">🍽️</span>
                    </div>
                )}

                {/* Badge */}
                {badgeInfo && BadgeIcon && (
                    <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full ${badgeInfo.bg} flex items-center gap-1.5`}>
                        <BadgeIcon className={`w-3.5 h-3.5 ${badgeInfo.color}`} />
                        <span className={`text-xs font-semibold ${badgeInfo.color}`}>
                            {badgeInfo.label}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                {/* Name */}
                <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2">
                    {item.name}
                </h3>

                {/* Description */}
                {item.description && (
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                )}

                {/* Price and Meta */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                    </span>

                    <div className="flex items-center gap-3 text-sm text-gray-400">
                        {item.rating && (
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                <span className="font-medium text-gray-600">{item.rating}</span>
                            </div>
                        )}

                        {item.prep_time_minutes && (
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{item.prep_time_minutes}m</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
