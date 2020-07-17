import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';

import SectionHeading from '../utils/SectionHeading';
// import Layout from '../layout/Layout';
import TestimonialSvg from '../svg/TestimonialSvg';

const NotFound = () => (
  <Wrap>
    <SectionHeading title="404: Address cannot be found" />
    <TestimonialSvg />
  </Wrap>
);

const Wrap = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    position: absolute;
  }
  svg {
    max-width: 100%;
    height: auto;
    overflow: hidden;
  }
  h1 {
    z-index: 5;
    margin: 0;
  }
`;

export default NotFound;
