import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Panel from "./Panel";
import "../styles/header.scss";
library.add(faBars);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = useLocation().pathname;

  function openMenu() {
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  function getTitle() {
    return pathname.indexOf("stats") === -1 ? "Hello" : "Stats";
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
            <Link to="/" onClick={closeMenu}>Your day</Link>
            <Link to="/stats" onClick={closeMenu}>Stats</Link>
          </nav>
        </Panel>
      </div>
      <h1>{getTitle()}</h1>
      <span className="Header-date">{getToday()}</span>
    </div>
  );
};

export default Header;
