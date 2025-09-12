/** @type {import('next-sitemap').IConfig} */
module.exports = {
  exclude: ['*/_meta'],
  siteUrl: 'https://docs.warponchain.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ]
  }
}
