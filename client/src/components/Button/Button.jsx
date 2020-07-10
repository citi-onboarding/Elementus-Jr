import React from 'react';
import '.\\Button.css';

const Button = ({
  Title,
  buttonColor,
  buttonSize,
  buttonTextColor
}) => {

  return (
    <div>
      <button style={{ backgroundColor: buttonColor, width: buttonSize, color: buttonTextColor }} className = {'button'} >
          <p className="text">{Title}</p>
      </button>
    </div>
);
}

  export default Button;