import React from 'react';
import '.\\Button.css';

const Button = ({
  Title,
  buttonColor,
  buttonSize
}) => {

  return (
    <div>
      <button style={{ backgroundColor: buttonColor, width: buttonSize}} className = {'button'} >
          <p>{Title}</p>
      </button>
    </div>
);
}

  export default Button;