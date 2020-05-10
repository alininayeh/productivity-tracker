import React, { useState, useEffect } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

const Notes = ({hidden, onSubmit, onCancel, data}) => {
    const [note, setNote] = useState(data);

    function onNoteChange(e) {
        setNote(e.target.value);
    }

    useEffect(() => {
        setNote(data);
    }, [data]);

    return (
        <div className={"Notes" + (hidden ? " hidden" : "")}>
            <div className="Notes-background" />
            <div className="Notes-placeholder">
                <textarea onChange={onNoteChange} value={note} placeholder="Add a note"></textarea>
                <ButtonGroup>
                    <Button label="Save" type="green" onClick={() => onSubmit(note)} />
                    <Button label="Cancel" onClick={onCancel} />
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Notes;