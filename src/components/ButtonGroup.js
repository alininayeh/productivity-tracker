import React from "react";
import "../styles/button-group.scss";

const ButtonGroup = ({children}) => {
    return (
        <div className="ButtonGroup">
            {children}
        </div>
    );
};

export default ButtonGroup;