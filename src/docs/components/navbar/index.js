import React from "react";

function NavBar() {
  return (
    <nav id="navbar" className="bg-white border-bottom sticky-top navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              { // eslint-disable-next-line
              }<a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#examples">
                Examples
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#usage">
                Usage
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#props">
                Props
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#methods">
                Methods
              </a>
            </li>
          </ul>
          <span className="navbar-text" style={{ fontSize: 24 }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-secondary"
              href="https://www.github.com/ahmetcanaydemir/advanced-react-news-ticker">
              <i class="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
