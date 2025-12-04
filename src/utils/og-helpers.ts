/**
 * Open Graph helper utilities
 * Provides functions to generate absolute URLs for OG images and metadata
 */

const getSiteUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://angkormenu.com')
  );
};

/**
 * Convert a relative or absolute image URL to an absolute URL for Open Graph
 * @param imageUrl - The image URL (can be relative or absolute)
 * @returns Absolute URL for the image
 */
export function getAbsoluteImageUrl(imageUrl: string | null | undefined): string | undefined {
  if (!imageUrl) return undefined;

  // If already absolute URL, return as-is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  // If relative URL, make it absolute
  const siteUrl = getSiteUrl();
  const cleanImageUrl = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  return `${siteUrl}${cleanImageUrl}`;
}

/**
 * Get the site URL
 */
export function getSiteBaseUrl(): string {
  return getSiteUrl();
}

