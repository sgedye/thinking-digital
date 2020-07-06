import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionHeading = ({ title }) => <StyledTitle>{title}</StyledTitle>;

const StyledTitle = styled.h1`
  mix-blend-mode: difference;
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 5vw;
  }
`;

SectionHeading.propTypes = {
  title: PropTypes.node.isRequired
};

export default SectionHeading;
