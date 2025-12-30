/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sujith Reddy Bommareddy - AI/ML Engineer`,
    description: `Portfolio of Sujith Reddy Bommareddy - AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning`,
    author: `Sujith Reddy Bommareddy`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: false,
  },
  trailingSlash: "always",
  plugins: ["gatsby-plugin-postcss"],
}
