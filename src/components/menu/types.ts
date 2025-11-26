import type { Database, Tables } from '@/lib/database.types';

export type MenuClient = Tables<'menu_clients'>;
export type MenuCategory = Tables<'menu_categories'>;
export type MenuItem = Tables<'menu_items'>;
export type MenuFeaturedItem = Tables<'menu_featured_items'>;
export type MenuItemBadgeType =
  Database['public']['Enums']['menu_item_badge_type'];

export interface MenuItemWithCategory extends MenuItem {
  category: Pick<MenuCategory, 'id' | 'name' | 'slug'> | null;
}

export interface MenuData {
  client: MenuClient;
  categories: MenuCategory[];
  items: MenuItemWithCategory[];
  featuredItems: MenuFeaturedItem[];
}
