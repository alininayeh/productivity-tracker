import React from "react";
import Panel from "./Panel";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import "../styles/stats-note.scss";

const StatsNote = ({hidden, day, onClose}) => {
    return (
        <Panel hidden={hidden} position="bottom">
            <div className="StatsNote">
                <h2>{!!day && day.date}</h2>
                <p>{!!day && day.notes}</p>
                <ButtonGroup>
                    <Button label="Close" onClick={onClose} />
                </ButtonGroup>
            </div>
        </Panel>
    );
};

export default StatsNote;