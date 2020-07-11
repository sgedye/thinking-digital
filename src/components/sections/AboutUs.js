import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../utils/SectionHeading';
import aboutData from '../../data/about-data';

const AboutUs = () => (
  <Wrap id="about-us">
    <SectionHeading title="Our Values | About Us" />
    <ul>
      <li>Listening:</li>
      <li>Responsive:</li>
      <li>Accessible:</li>
      <li>Agile:</li>
      <li>Inclusive:</li>
    </ul>
    <ValuesGroup>
      {aboutData.map(step => (
        <Card key={step.title}>
          <h2>{step.title}</h2>
          <p>{step.content}</p>
        </Card>
      ))}
    </ValuesGroup>
  </Wrap>
);

const Wrap = styled.section`
  width: 90vw;
  margin: 0 auto;
`;

const ValuesGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Card = styled.article`
  margin: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
  h2 {
    margin: 5px auto;
    font-size: 1.4em;
    font-weight: bold;
  }
  @media screen and (min-width: 600px) {
    margin: 0 20px;
    width: 25%;
  }
`;

export default AboutUs;
