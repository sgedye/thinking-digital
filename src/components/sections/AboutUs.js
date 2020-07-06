import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../utils/SectionHeading';
import AboutValue from '../AboutValue';
import aboutData from '../../data/about-data';

const AboutUs = () => (
  <Wrap id="features">
    <SectionHeading title="About Us" />
    <h2>Our Values:</h2>
    <ul>
      <li>Listening:</li>
      <li>Responsive:</li>
      <li>Accessible:</li>
      <li>Agile:</li>
      <li>Inclusive:</li>
    </ul>
    <Values>
      {aboutData.map(step => (
        <div key={step.title}>
          <AboutValue step={step} />
        </div>
      ))}
    </Values>
  </Wrap>
);

const Wrap = styled.section`
  width: 90vw;
  margin: 0 auto;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  div {
    margin: 5px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export default AboutUs;
