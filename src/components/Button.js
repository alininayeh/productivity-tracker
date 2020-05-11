import React from "react";
import "../styles/button.scss";

const Button = ({ label, onClick, type = "" }) => {
  return (
    <button className={"Button " + type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
