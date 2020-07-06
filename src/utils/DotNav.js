import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DotNav = ({ numDots }) => {
  return (
    <DotRow>
      {numDots.map(dot => (
        <Dot key={dot.id} />
        // Add an onclick event to change the testamonial
      ))}
    </DotRow>
  );
};

const DotRow = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
  div {
    background-color: green;
  }
  div:hover {
    background-color: purple;
  }
  div:active {
    background-color: red;
  }
`;
const Dot = styled.div`
  display: inline-block;
  margin: 0 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

DotNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  numDots: PropTypes.array.isRequired
};

export default DotNav;
