import React, { useState, useEffect } from "react";
import "./styles.scss";
import Vote from "./components/Vote";
import Button from "./components/Button";
import DataManager from "./utils/DataManager";

export default function App() {
  const [dayRating, setDayRating] = useState();
  const [moodRating, setMoodRating] = useState();

  function update() {
    const today = DataManager.load();

    if (today) {
      setDayRating(today.day);
      setMoodRating(today.mood);
    }
  }

  function onVote(type, rating) {
    DataManager.save(type, rating);
    update();
  }

  useEffect(() => {
    update();
  });

  return (
    <div className="App">
      <h1>Hello</h1>
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
      <Button label="Add notes" type="link" />
    </div>
  );
}
