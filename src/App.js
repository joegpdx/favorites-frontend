import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Search';
import Favorites from './Favorites';

function App() {
  return (
    <div>
      <header>
          <h1>Rick and Morty API</h1>
      </header>
      <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/" component={Favorites} />
        </Switch>

      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;