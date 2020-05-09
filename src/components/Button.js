import React from "react";

const Button = ({label, onClick, type = 'button'}) => {
    return (
        <span className="Button">
        {
            type === 'button' ?
            <button className="Button" onClick={onClick}>{label}</button> :
            <a href="javascript:;" onClick={onClick}>{label}</a>
        }
        </span>
    );
};

export default Button;