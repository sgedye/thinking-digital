import React from 'react';
import styled from 'styled-components';

import processData from '../../data/process-data';
import DesignStep from '../DesignStep';
import SectionHeading from '../../utils/SectionHeading';

const DesignProcess = () => {
  return (
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
  width: 80vw;
  margin: 20px auto;
  @media screen and (min-width: 600px) {
    div:nth-of-type(even) {
      div {
        flex-direction: row-reverse;
      }
    }
  }
`;

export default DesignProcess;
