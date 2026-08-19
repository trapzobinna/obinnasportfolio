/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://obinna-portfolio.vercel.app',
  generateRobotsTxt: true,
  outDir: 'public',
}
