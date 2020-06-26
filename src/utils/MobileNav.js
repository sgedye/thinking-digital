import React, { useState } from 'react';
import Link from 'gatsby-link';
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
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home2
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home3
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home4
            </Link>
          </li>
        </ul>
      </MenuLinks>
    </>
  );
};

const Hamburger = styled.div`
  width: 30px;
  margin: 0 auto;
  padding: 3px 6px;
  z-index: 99;
  cursor: pointer;
  transition: transform 800ms;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-90deg)' : 'rotate(0)')};
  transform-origin: center;
  div {
    box-shadow: ${({ isMenuOpen }) => (isMenuOpen ? '0px 0px 1px orange' : '0px 0px 1px green')};
  }
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
  height: 4px;
  width: 30px;
  background-color: #1e3444;
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
  width: 100vw;
  height: ${({ isMenuOpen }) => (isMenuOpen ? 'calc(100vh - 80px)' : '0px')};
  pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};
  transition: height 800ms;
  text-shadow: 1px 1px 1px black;
  background: rgba(88, 88, 88, 0.99);
  ul {
    height: 80%;
    margin: 10% 0;
    padding: 0;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  li {
    text-align: center;
    font-size: 8vw;
  }
`;
export default MainNav;
