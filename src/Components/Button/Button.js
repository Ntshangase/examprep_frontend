import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'primary' }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;