import React from "react";
import { NavLink } from 'react-router-dom';

import './navbar.css';
class Navbar extends React.Component {
    constructor(props) {
        super(props); // ✅ We passed props
      }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="/">Runeterra Hub</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/set">Meta</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/set">Decks</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/set">Deckbuilder</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/set" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Card Library
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/set">Base Set</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/set">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/set">Register</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="/set">Hub Tracker</a>
                  </li>
                </ul>
              </div>
            </nav>
        )
    }
};

export default Navbar;