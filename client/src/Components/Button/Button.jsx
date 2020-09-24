import React from "react";
import "./Button.css";

const Button = ({
  Title,
  buttonColor,
  buttonSize,
  buttonTextColor,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: buttonColor,
          width: buttonSize,
          color: buttonTextColor,
        }}
        className={"button"}
      >
        <p className="text">{Title}</p>
      </button>
    </div>
  );
};

export default Button;
