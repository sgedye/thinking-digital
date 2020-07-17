import React from 'react';
// import { useEffect } from 'react';
// import gsap from 'gsap';

import Layout from '../layout/Layout';
// import HeroOverlay from '../sections/HeroOverlay';
import HeroSection from '../sections/HeroSection';
import AboutUs from '../sections/AboutUs';
import DesignProcess from '../sections/DesignProcess';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
// import CallToAction from '../sections/CallToAction';
import ContactUs from '../sections/ContactUs';

const index = () => {
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
      <Services />
      <Testimonials />
      {/* <CallToAction id="call-to-action" /> */}
      <ContactUs />
    </Layout>
  );
};

export default index;
