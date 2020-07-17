import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../utils/SectionHeading';

const Services = () => (
  <section id="services">
    <SectionHeading title="Services" />
    <div>
      <Card>Service 1:</Card>
      <Card>Service 2:</Card>
      <Card>Service 3:</Card>
    </div>
  </section>
);

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

export default Services;
