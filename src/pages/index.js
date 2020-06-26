import React, { useEffect } from 'react';
import gsap from 'gsap';

// import Button from '../components/Button';
// import Card from '../components/Card';
// import CustomerCard from '../components/CustomerCard';
// import LabelText from '../components/LabelText';
// import SplitSection from '../components/SplitSection';
// import StatsBox from '../components/StatsBox';
// import customerData from '../data/customer-data';
// import SvgCharts from '../svg/SvgCharts';

import Layout from '../components/layout/Layout';
import HeroOverlay from '../components/sections/HeroOverlay';
import HeroSection from '../components/sections/HeroSection';
import Features from '../components/sections/Features';
import DesignProcess from '../components/sections/DesignProcess';
import Testamonials from '../components/sections/Testamonials';
import CallToAction from '../components/sections/CallToAction';

export default () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.overlay', 1.4, {
      height: 0,
      width: 0,
      margin: '50vh 50vw',
      ease: 'power3',
      delay: 0.8
    }).then(() => {
      const overlay = document.getElementById('overlayPanel') || null;
      if (overlay) {
        overlay.parentNode.removeChild(overlay);
      }
    });
  });

  return (
    <Layout>
      <HeroOverlay />
      <HeroSection />
      {/* <Features /> */}
      <DesignProcess />
      <Testamonials />
      <CallToAction />
      {/* 
      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our customers get results</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
          </div>
        </div>
      </section>
      */}
    </Layout>
  );
};
