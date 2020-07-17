import React from 'react';
import styled from 'styled-components';

import processData from '../assets/data/process-data';
import DesignStep from '../components/DesignStep';
import SectionHeading from '../utils/SectionHeading';

const DesignProcess = () => {
  return (
    // Look at Eduka's website

    <Wrap id="design-process">
      <SectionHeading title="Main Features" />
      {processData.map(step => (
        <div key={step.title}>
          <DesignStep step={step} />
        </div>
      ))}
    </Wrap>
  );
};

const Wrap = styled.section`
  @media screen and (min-width: 600px) {
    div:nth-of-type(even) {
      div {
        flex-direction: row-reverse;
      }
    }
  }
`;

export default DesignProcess;
