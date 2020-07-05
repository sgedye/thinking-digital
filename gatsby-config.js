module.exports = {
  siteMetadata: {
    title: `Thinking Digital`,
    description: `For all your digial needs`,
    author: `SG`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
