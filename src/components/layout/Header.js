import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import LogoIcon from '../../svg/LogoIcon';
import MobileNav from '../../utils/MobileNav';

const Header = () => (
  <StyledHeader>
    <LogoDiv style={{ width: '48px', height: '48px' }}>
      <LogoIcon />
    </LogoDiv>
    <TitleDiv>
      <h2>Thinking Digital</h2>
    </TitleDiv>
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
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 80px;
  padding: 0;
  /* background-color: transparent; */
  background-color: rgba(205, 205, 255, 0.8);
  opacity: 0.95;
  z-index: 5;
`;

const LogoDiv = styled.div`
  margin: 0 auto;
`;

const TitleDiv = styled.div`
  h2 {
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
