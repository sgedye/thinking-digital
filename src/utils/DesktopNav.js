import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const DesktopNav = () => (
  <nav id="desktop-nav">
    <AnchorLink className="desktop-link" to="/#about-us" title="About Us" />
    <AnchorLink className="desktop-link" to="/#design-process" title="Design Process" />
    <AnchorLink className="desktop-link" to="/#services" title="Services" />
    <AnchorLink className="desktop-link" to="/#testimonials" title="Testimonials" />
    <AnchorLink className="desktop-link" to="/#contact-us" title="Contact Us" />
  </nav>
);

export default DesktopNav;
