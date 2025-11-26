import type { Tables } from '@/lib/database.types';
import { createPublicSupabaseClient } from '@/supabase-clients/public';
import { cache } from 'react';

export type MenuClient = Tables<'menu_clients'>;
export type MenuCategory = Tables<'menu_categories'>;
export type MenuItem = Tables<'menu_items'>;
export type MenuFeaturedItem = Tables<'menu_featured_items'>;

// Create a singleton instance for public data
const getPublicSupabase = () => createPublicSupabaseClient();

/**
 * Get a client by their slug
 */
export const getMenuClientBySlug = cache(async (slug: string) => {
  const supabase = getPublicSupabase();

  const { data, error } = await supabase
    .from('menu_clients')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (error) {
    console.error('Error fetching menu client:', error);
    return null;
  }

  return data;
});

/**
 * Get all categories for a client
 */
export const getMenuCategories = cache(async (clientId: string) => {
  const supabase = getPublicSupabase();

  const { data, error } = await supabase
    .from('menu_categories')
    .select('*')
    .eq('client_id', clientId)
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching menu categories:', error);
    return [];
  }

  return data;
});

/**
 * Get all menu items for a client
 */
export const getMenuItems = cache(
  async (clientId: string, categorySlug?: string) => {
    const supabase = getPublicSupabase();

    let query = supabase
      .from('menu_items')
      .select(
        `
      *,
      category:menu_categories(id, name, slug)
    `
      )
      .eq('client_id', clientId)
      .eq('is_available', true)
      .order('sort_order', { ascending: true });

    // If categorySlug is provided and not 'all', filter by category
    if (categorySlug && categorySlug !== 'all') {
      // First get the category ID
      const { data: category } = await supabase
        .from('menu_categories')
        .select('id')
        .eq('client_id', clientId)
        .eq('slug', categorySlug)
        .single();

      if (category) {
        query = query.eq('category_id', category.id);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching menu items:', error);
      return [];
    }

    return data;
  }
);

/**
 * Get featured/hero items for carousel
 */
export const getMenuFeaturedItems = cache(async (clientId: string) => {
  const supabase = getPublicSupabase();

  const { data, error } = await supabase
    .from('menu_featured_items')
    .select('*')
    .eq('client_id', clientId)
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching featured items:', error);
    return [];
  }

  return data;
});

/**
 * Get all menu data for a client in a single call
 */
export const getFullMenuData = cache(async (clientSlug: string) => {
  const client = await getMenuClientBySlug(clientSlug);

  if (!client) {
    return null;
  }

  const [categories, items, featuredItems] = await Promise.all([
    getMenuCategories(client.id),
    getMenuItems(client.id),
    getMenuFeaturedItems(client.id),
  ]);

  return {
    client,
    categories,
    items,
    featuredItems,
  };
});
