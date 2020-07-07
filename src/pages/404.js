import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../utils/SectionHeading';
import TestimonialSvg from '../svg/TestimonialSvg';

export default function() {
  return (
    <Wrap>
      <SectionHeading title="404: Address cannot be found" />
      <TestimonialSvg />
    </Wrap>
  );
}

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
  h1 {
    z-index: 5;
    margin: 0;
  }
`;
