import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, icon, className, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
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
