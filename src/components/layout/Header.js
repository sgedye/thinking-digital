import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import LogoIcon from '../../svg/LogoIcon';
import MobileNav from '../../utils/MobileNav';

const Header = () => (
  <StyledHeader className="header">
    <LogoDiv>
      <div style={{ width: '50px' }}>
        <LogoIcon />
      </div>
      <h2>Thinking Digital</h2>
    </LogoDiv>
    <MainNav>
      <MobileNav />
      {/* <DesktopNav /> */}
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

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: transparent; */
  background-color: rgba(205, 205, 255, 0.8);
  opacity: 0.95;
  z-index: 5;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MainNav = styled.nav`
  color: #000;
`;
// const MenuNav = styled.nav`
//   position: relative;
//   left: 0;
// `;

export default Header;
