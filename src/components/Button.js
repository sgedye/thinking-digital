import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, additionalStyles = {} }) => {
  const styles = {
    fontSize: '23px',
    color: 'blue',
    backgroundColor: 'green',
    ...additionalStyles
  };

  return (
    <button type="button" style={styles}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  additionalStyles: PropTypes.object.isRequired
};

export default Button;
