import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const MainNav = () => (
  <nav>
    <ul id="nav-links" className="navbar-nav mx-auto text-capitalize">
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
    <div id="hamburger">
      <div id="hb-top" className="line" />
      <div id="hb-middle" className="line" />
      <div id="hb-bottom" className="line" />
    </div>
  </nav>
);

export default MainNav;
