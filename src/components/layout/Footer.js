import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    <Article>
      <h2>About Us</h2>
      <p>Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p>
    </Article>
    <Article>
      <h2>Important Links</h2>
      <ul>
        <li>
          <a href="/">Terms &amp; Conditions</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
    </Article>
    <Article>
      <h2>Social Media</h2>
      <ul>
        <li>
          <a href="/">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/">GitHub</a>
        </li>
      </ul>
    </Article>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #888;
  border-top: 1px solid #333;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Article = styled.article`
  height: 100%;
  min-height: 150px;
  min-width: 25%;
  ul {
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export default Footer;
