import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import LogoIcon from '../../svg/LogoIcon';
import DesktopNav from '../../utils/DesktopNav';
import MobileNav from '../../utils/MobileNav';

const Header = () => {
  const [scrolled, setScrolled] = useState(0);
  const [headerStyle, setHeaderStyle] = useState(null);

  const watchScrolling = () => {
    const { scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    setScrolled(winScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', watchScrolling);
    return () => window.removeEventListener('scroll', watchScrolling);
  });

  useEffect(() => {
    if (scrolled > 2) {
      setHeaderStyle({
        height: 80,
        backgroundColor: 'rgba(205, 205, 255, 0.95)'
      });
    } else {
      setHeaderStyle({
        height: 100,
        backgroundColor: 'rgba(205, 205, 255, 0.1)',
        borderBottom: '1px solid darkblue'
      });
    }
  }, [scrolled]);

  return (
    <StyledHeader style={headerStyle}>
      <LogoDiv style={{ width: '48px', height: '48px' }}>
        <LogoIcon />
      </LogoDiv>
      <TitleDiv>
        <h2>Thinking Digital</h2>
      </TitleDiv>
      <MainNav>
        {/* <MobileNav /> */}
        {window.outerWidth > 600 ? <DesktopNav /> : <MobileNav />}
      </MainNav>

      {/* <MenuNav>
        <AnchorLink className="menu-link" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="menu-link" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="menu-link" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="menu-link" href="#testimonials">
          Testimonials
        </AnchorLink>
      </MenuNav> */}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 0;
  z-index: 5;
  transition: all 200ms ease-out;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 4fr;
    color: white;
  }
`;

const LogoDiv = styled.div`
  margin: 0 auto;
`;

const TitleDiv = styled.div`
  h2 {
    margin: 0 auto;
    text-align: center;
  }
`;
const MainNav = styled.nav`
  color: #000;
`;
// const MenuNav = styled.nav`
//   position: relative;
//   left: 0;
// `;

export default Header;
