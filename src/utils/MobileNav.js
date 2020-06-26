import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Hamburger isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(prevState => !prevState)}>
        <Line id="hb-top" />
        <Line id="hb-middle" />
        <Line id="hb-bottom" />
      </Hamburger>
      <MenuLinks isMenuOpen={isMenuOpen}>
        <ul>
          <li>
            <AnchorLink to="/">Home</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/">Home2</AnchorLink>
          </li>
        </ul>
      </MenuLinks>
    </>
  );
};

const Hamburger = styled.div`
  position: absolute;
  display: block;
  padding: 3px 6px;
  cursor: pointer;
  right: 20px;
  top: 18px;
  z-index: 99;
  transition: transform 800ms;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-90deg)' : 'rotate(0)')};
  transform-origin: center;
  div:first-of-type {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-45deg) translate(-9px, 10px)' : 'rotate(0) translate(0)'};
  }
  div:nth-of-type(2) {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-135deg) translate(-3px, -2px)' : 'rotate(0) translate(0)'};
  }
  div:last-of-type {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-45deg) translate(4px, -3px)' : 'rotate(0) translate(0)'};
  }
`;

const Line = styled.div`
  width: ${({ isMenuOpen }) => (isMenuOpen ? '38px' : '30px')};
  height: 4px;
  background: rgb(30, 190, 250);
  border-radius: 2px;
  margin: 5px 0;
  transition: all 800ms;
  transform-origin: center;
`;

const MenuLinks = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  height: ${({ isMenuOpen }) => (isMenuOpen ? 'calc(100vh - 80px)' : '0px')};
  transition: height 800ms;
  background: black;
`;
export default MainNav;
