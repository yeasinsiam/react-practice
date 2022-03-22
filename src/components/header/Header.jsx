import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>core</span>
          <span>x</span>
          <span>Books</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="https://www.google.com/">Learn More</a>
            </li>
            <li>
              <a href="https://www.google.com/">Invoice Guide</a>
            </li>
            <li>
              <a href="https://www.google.com/" className="link-button">
                Upgrade
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
