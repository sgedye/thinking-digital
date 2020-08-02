module.exports = {
  siteMetadata: {
    title: `Thinking Digital`,
    author: `Shaun Gedye`,
    description: `For all your digial needs`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components'
  ]
};
