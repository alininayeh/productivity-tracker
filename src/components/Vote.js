import React from "react";
import Thumb from "./Thumb";

const Vote = ({ label, onVote, rating }) => {
  function vote(rating) {
    onVote(rating);
  }

  return (
    <div className={"Vote" + (rating ? " selected" : "")}>
      <h2>{label}</h2>
      <Thumb type="UP" onClick={vote} selected={rating === "UP"} />
      <Thumb type="DOWN" onClick={vote} selected={rating === "DOWN"} />
    </div>
  );
};

export default Vote;
