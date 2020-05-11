import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../styles/stats.scss";
import DataManager from "../utils/DataManager";
import StatsNote from "./StatsNote";

library.add(faInfoCircle);

const Stats = () => {
  const data = DataManager.getData();
  const [showInfo, setShowInfo] = useState(false);
  const [day, setDay] = useState();

  function showNotes(day) {
    setShowInfo(true);
    setDay(day);
  }

  function closeNotes() {
    setShowInfo(false);
  }

  function getData() {
    return data.map((day, i) => (
      <div className="Stats-row" key={i}>
        <div className="Stats-date">
          {day.date}
          {!!day.notes && (
            <span className="Stats-info">
              <FontAwesomeIcon
                icon={faInfoCircle}
                onClick={() => showNotes(day)}
              />
            </span>
          )}
        </div>
        <div className={"Stats-rating " + day.day.toLowerCase()}></div>
        <div className={"Stats-rating " + day.mood.toLowerCase()}></div>
      </div>
    ));
  }

  if (!data.length) {
      return (
        <div className="Stats-no-stats">No stats yet</div>
      );
  }

  return (
    <div className="Stats">
      <div className="Stats-header">
        <div className="Stats-row">
          <div className="Stats-date">Date</div>
          <div className="Stats-rating">Day</div>
          <div className="Stats-rating">Mood</div>
        </div>
      </div>
      <div className="Stats-content">{getData()}</div>
      <StatsNote hidden={!showInfo} day={day} onClose={closeNotes} />
    </div>
  );
};

export default Stats;
