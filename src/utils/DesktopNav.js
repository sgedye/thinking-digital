import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const DesktopNav = () => (
  <NavLinks>
    <ul id="nav-links" className="navbar-nav mx-auto text-capitalize">
      <li className="nav-item link">
        <AnchorLink className="nav-link" to="/">
          Home
        </AnchorLink>
      </li>
      <li className="nav-item link">
        <AnchorLink className="nav-link" to="/about-us">
          About Us | Features
        </AnchorLink>
      </li>
      <li className="nav-item link">
        <AnchorLink className="nav-link" to="/">
          Links...
        </AnchorLink>
      </li>
      <li className="nav-item link">
        <AnchorLink className="nav-link" to="/">
          Links...
        </AnchorLink>
      </li>
      <li className="nav-item link">
        <AnchorLink className="nav-link" to="#contactanos">
          Links...
        </AnchorLink>
      </li>
    </ul>
  </NavLinks>
);

const NavLinks = styled.nav`
  color: red;
  font-weight: bold;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
`;
export default DesktopNav;
