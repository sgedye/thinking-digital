import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SvgCharts from '../svg/SvgCharts';

const DesignStep = ({ step }) => (
  <StyledDesignStep className="design-step">
    <div>
      <h3>{step.title}</h3>
      <p>{step.content}</p>
    </div>
    <div>
      <SvgCharts />
    </div>
  </StyledDesignStep>
);

const StyledDesignStep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
  div {
    margin: 5px;
    width: 80%;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    div {
      margin: 20px;
      width: 40%;
    }
  }
`;

DesignStep.propTypes = {
  step: PropTypes.node.isRequired
};

export default DesignStep;
