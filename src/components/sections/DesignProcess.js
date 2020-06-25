import React from 'react';
import styled from 'styled-components';

import processData from '../../data/process-data';
import DesignStep from '../DesignStep';

const DesignProcess = () => {
  return (
    <Wrap id="design-process">
      {processData.map(step => (
        <div key={step.title}>
          <DesignStep step={step} />
        </div>
      ))}
    </Wrap>
  );
};

const Wrap = styled.section`
  margin: 20px auto;
  width: 100%;
  @media screen and (min-width: 600px) {
    div:nth-of-type(even) {
      div {
        flex-direction: row-reverse;
      }
    }
  }
`;

export default DesignProcess;
