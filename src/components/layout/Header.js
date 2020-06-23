import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import LogoIcon from '../../svg/LogoIcon';

const Header = () => (
  <StyledHeader className="header">
    <LogoDiv>
      <div style={{ width: '50px' }}>
        <LogoIcon />
      </div>
      <span>Thinking Digital</span>
    </LogoDiv>
    <MenuNav>
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
    </MenuNav>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: lightskyblue;
  opacity: 0.95;
  z-index: 5;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuNav = styled.nav`
  position: relative;
  left: 0;
`;

export default Header;
