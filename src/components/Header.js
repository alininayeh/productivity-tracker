import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Panel from "./Panel";
import "../styles/header.scss";
library.add(faBars);

const Header = ({ title }) => {
  const [showMenu, setShowMenu] = useState(false);

  function openMenu() {
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  function getToday() {
    const today = new Date().toDateString();
    const month = today.split(" ")[1];
    const day = today.split(" ")[2];
    return month + " " + day;
  }

  return (
    <div className="Header">
      <div className="Header-menu">
        <span className="Header-menu-button" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <Panel hidden={!showMenu} position="left">
          <nav className="Header-menu-list">
            <a href="#" onClick={closeMenu}>Your day</a>
            <a href="#" onClick={closeMenu}>See graph</a>
          </nav>
        </Panel>
      </div>
      <h1>{title}</h1>
      <span className="Header-date">{getToday()}</span>
    </div>
  );
};

export default Header;
