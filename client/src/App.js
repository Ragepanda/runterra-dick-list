import React from 'react';
import './App.css';
import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import Set from "./pages/Set/Set";
import Deck from "./pages/Decks/Deck";
import Decklists from "./pages/Decks/DeckLists";
import Deckbuilder from "./pages/Deckbuilder/Deckbuilder";

import Navbar from "./component/Navbar";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App" id="element-with-background-image">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/card/:name" component={Card} />
            <Route exact path="/set/" component={Set} />
            <Route exact path="/deck_lists/" component={Decklists} />
            <Route exact path="/deck_lists/:deck" component={Deck} />
            <Route exact path="/deck_builder" component={Deckbuilder} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
