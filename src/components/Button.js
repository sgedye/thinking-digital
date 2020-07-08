import React from 'react';

const Button = ({ children, className = '', styles = {} }) => {
  console.log(className, styles);
  const defaultStyles = {
    color: 'blue'
  };
  // We need to merge the two styles, so that the new styles are added to the
  // existing [default] styles (overwriting them if they exist). Remember these
  // are objects (and not strings, so can't be done like the classes below)
  return (
    <button
      type="button"
      className={`
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
      `}
      style={styles}
      // style={{
      //   backgroundColor: 'green'
      // }}
    >
      {children}
    </button>
  );
};

export default Button;
