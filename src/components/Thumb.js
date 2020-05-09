import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faThumbsUp);
library.add(faThumbsDown);

const Thumb = ({ type, onClick, selected }) => {
  return (
    <span
      className={
        "Thumb " +
        (type === "UP" ? "up" : "down") +
        (selected ? " selected" : "")
      }
      onClick={() => onClick(type)}
    >
      {type === "UP" ? (
        <FontAwesomeIcon icon={faThumbsUp} />
      ) : (
        <FontAwesomeIcon icon={faThumbsDown} />
      )}
    </span>
  );
};

export default Thumb;
