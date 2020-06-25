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
      <Features />
      <DesignProcess />
      <Testamonials />
      <CallToAction />
      {/* 
      
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how your company stacks
              against the closest competitors
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
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
