import React from 'react';
import './button.scss';

const Button = ({ text, action }) => {
  return (
    <button type="submit" onClick={action}>{ text }</button>
  );
};

export default Button;
