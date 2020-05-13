import React, { useState, useEffect } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import Panel from "./Panel";
import "../styles/notes.scss";

const Notes = ({hidden, onSubmit, onCancel, data}) => {
    const [note, setNote] = useState(data);

    function onNoteChange(e) {
        setNote(e.target.value);
    }

    useEffect(() => {
        setNote(data);
    }, [data, hidden]);

    return (
        <Panel hidden={hidden} position="bottom">
            <div className="Notes">
            <textarea onChange={onNoteChange} value={note} placeholder="Add a note"></textarea>
                <ButtonGroup>
                    <Button label="Save" type="green" onClick={() => onSubmit(note)} />
                    <Button label="Cancel" onClick={onCancel} />
                </ButtonGroup>
            </div>
        </Panel>
    );
};

export default Notes;