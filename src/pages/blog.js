import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/Layout';

const markdown = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }
`;

const blog = () => {
  const data = useStaticQuery(markdown);
  const blogList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {blogList.map((entry, index) => (
          <li key={index}>
            <h3>{entry.node.frontmatter.title}</h3>
            <h5>{entry.node.frontmatter.author}</h5>
            <h4>{entry.node.frontmatter.date}</h4>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default blog;
