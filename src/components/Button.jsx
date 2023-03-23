import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, icon, className, onClick, type = "button" }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {text} {icon}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
