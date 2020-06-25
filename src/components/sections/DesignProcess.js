import React from 'react';
import styled from 'styled-components';

import processData from '../../data/process-data';
import DesignStep from '../DesignStep';

const DesignProcess = () => (
  <Wrap>
    {processData.map(step => (
      <div key={step.title}>
        <DesignStep step={step} />
      </div>
    ))}
  </Wrap>
);

const Wrap = styled.section`
  width: 100%;
`;

export default DesignProcess;
