import React from 'react';
// import { useEffect } from 'react';
// import gsap from 'gsap';

import Layout from '../layout/Layout';
// import HeroOverlay from '../sections/HeroOverlay';
import HeroSection from '../sections/HeroSection';
import AboutUs from '../sections/AboutUs';
import DesignProcess from '../sections/DesignProcess';
import Testamonials from '../sections/Testamonials';
// import CallToAction from '../sections/CallToAction';

export default () => {
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.to('.overlay', 1.4, {
  //     height: 0,
  //     width: 0,
  //     margin: '50vh 50vw',
  //     ease: 'power3',
  //     delay: 0.8
  //   }).then(() => {
  //     const overlay = document.getElementById('overlayPanel') || null;
  //     if (overlay) {
  //       overlay.parentNode.removeChild(overlay);
  //     }
  //   });
  // });

  return (
    <Layout>
      {/* <HeroOverlay /> */}
      <HeroSection />
      <AboutUs />
      <DesignProcess />
      <Testamonials />
      {/* <CallToAction id="call-to-action" /> */}
    </Layout>
  );
};
