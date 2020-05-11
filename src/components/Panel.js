import React from "react";
import "../styles/panel.scss";

const Panel = ({hidden, position, children}) => {
    return (
        <div className={"Panel" + (hidden ? " hidden" : "")}>
            <div className="Panel-background" />
            <div className={"Panel-placeholder " + position}>
                {children}
            </div>
        </div>
    );
};

export default Panel;