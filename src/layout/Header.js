import React, { useState, useEffect } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import LogoIcon from '../assets/svg/LogoIcon';
import DesktopNav from '../utils/DesktopNav';
import MobileNav from '../utils/MobileNav';

const Header = () => {
  const [scrolled, setScrolled] = useState(0);
  const watchScrolling = () => {
    const { scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    setScrolled(winScroll);
  };
  useEffect(() => {
    window.addEventListener('scroll', watchScrolling);
    return () => window.removeEventListener('scroll', watchScrolling);
  });

  const [headerStyle, setHeaderStyle] = useState(null);
  useEffect(() => {
    if (scrolled > 2) {
      setHeaderStyle({
        height: 80,
        backgroundColor: 'rgba(205, 205, 255, 0.95)'
      });
    } else {
      setHeaderStyle({
        // height: 100,
        height: 80,
        backgroundColor: 'rgba(205, 205, 255, 0.1)',
        borderBottom: '1px solid darkblue'
      });
    }
  }, [scrolled]);

  return (
    <header id="header" style={headerStyle}>
      <div id="logo" style={{ width: '48px', height: '48px' }}>
        <LogoIcon />
      </div>
      <AnchorLink to="/#top-of-page" id="header-title" title="Thinking Digital" />
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
