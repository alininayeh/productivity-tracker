import React, { useState, useEffect } from "react";
import Vote from "./components/Vote";
import Button from "./components/Button";
import DataManager from "./utils/DataManager";
import ButtonGroup from "./components/ButtonGroup";
import Notes from "./components/Notes";
import Header from "./components/Header";
import "./styles/main.scss";

export default function App() {
  const [dayRating, setDayRating] = useState();
  const [moodRating, setMoodRating] = useState();
  const [notes, setNotes] = useState();
  const [showNotes, setShowNotes] = useState(false);

  function update() {
    const today = DataManager.load();

    if (today) {
      setDayRating(today.day);
      setMoodRating(today.mood);
      setNotes(today.notes);
    }
  }

  function onVote(type, rating) {
    DataManager.save(type, rating);
    update();
  }

  function onShowNotes() {
    setShowNotes(true);
  }

  function submitNotes(note) {
    DataManager.save("", "", note);
    setShowNotes(false);
  }

  function cancelNotes() {
    setShowNotes(false);
  }

  useEffect(() => {
    update();
  });

  return (
    <div className="App">
      <Header title="Hello" />
      <div className="Vote-placeholder">
        <Vote
          label="How was your day?"
          onVote={(rating) => onVote("DAY", rating)}
          rating={dayRating}
        />
        <Vote
          label="How was your mood?"
          onVote={(rating) => onVote("MOOD", rating)}
          rating={moodRating}
        />
      </div>
      <ButtonGroup>
        <Button label={!notes ? "Add a note" : "Edit notes"} onClick={onShowNotes} />
      </ButtonGroup>
      <Notes hidden={!showNotes} data={notes} onSubmit={submitNotes} onCancel={cancelNotes} />
    </div>
  );
}
