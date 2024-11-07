import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>MY REACT PORTFOLIO</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#hero">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">PROJECTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">ABOUT ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
