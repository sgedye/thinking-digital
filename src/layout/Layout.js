import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import PageProgress from '../utils/PageProgress';
import Footer from './Footer';
import '../assets/scss/base.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <PageProgress /> */}
      {/* Make the header transparent, then lightskyblue after 200px or something */}
      <main id="main-body">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
