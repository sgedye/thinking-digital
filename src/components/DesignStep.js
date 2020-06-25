import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DesignStep = ({ step }) => (
  <StyledDesignStep>
    <h3>{step.title}</h3>
    <p>{step.content}</p>
    <div>
      <img src={step.stepImage} alt={step.title} />
    </div>
  </StyledDesignStep>
);

const StyledDesignStep = styled.div`
  margin: 0 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
`;

DesignStep.propTypes = {
  step: PropTypes.node.isRequired
};

export default DesignStep;
