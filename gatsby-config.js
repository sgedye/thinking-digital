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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
