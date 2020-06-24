import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

const StyledTitle = styled.h1`
  mix-blend-mode: difference;
  font-size: 5vw;
  text-align: center;
`;

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
