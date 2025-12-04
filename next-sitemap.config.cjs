/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    'https://angkormenu.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/dashboard', '/dashboard/*', '/auth/*', '/api/*'],
  additionalPaths: async (config) => {
    const result = [];

    // Add main pages
    result.push({
      loc: '/',
      changefreq: 'weekly',
      priority: 1.0,
    });

    result.push({
      loc: '/privacy',
      changefreq: 'monthly',
      priority: 0.5,
    });

    result.push({
      loc: '/terms',
      changefreq: 'monthly',
      priority: 0.5,
    });

    return result;
  },
};
