module.exports = {
  siteMetadata: {
    title: `Thinking Digital`,
    author: `Shaun Gedye`,
    description: `For all your digial needs`
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
