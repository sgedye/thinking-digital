import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../../utils/SectionHeading';

const Features = () => (
  <Wrap>
    <SectionHeading>Main Features</SectionHeading>
    <FeaturesGroup>
      <Card>
        <h2>Service One</h2>
        <p>justo integer odiovelna vitae auctor integer.</p>
      </Card>
      <Card>
        <h2>Service Two</h2>
        <p>justo integer odiovelna vitae auctor integer.</p>
      </Card>
      <Card>
        <h2>Service Three</h2>
        <p>An enim nullam tempor gravida donec integer.</p>
      </Card>
    </FeaturesGroup>
  </Wrap>
);

const Wrap = styled.section`
  width: 100%;
`;

const FeaturesGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Card = styled.article`
  margin: 10px 20px;
  padding: 10px;
  width: 80%;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
  h2 {
    font-weight: bold;
  }
  @media screen and (min-width: 600px) {
    margin: 0 20px;
    width: 25%;
  }
`;

export default Features;
