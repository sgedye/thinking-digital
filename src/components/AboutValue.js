import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AboutValue = ({ step }) => (
  <StyledAboutValue className="about-step">
    <h3>{step.title}</h3>
    <p>{step.content}</p>
  </StyledAboutValue>
);

const StyledAboutValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #333;
  width: 250px;
  h3,
  p {
    margin: 5px auto;
  }
`;

AboutValue.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  step: PropTypes.object.isRequired
};

export default AboutValue;
