import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Journal from './Journal';

function App() {
  return (
      <Router>
        <div className="displayContainer">
          <Route path="/" exact component={LandingPage}/>
          <Route path="/id/:id" exact component={Journal}/>
        </div>
      </Router>
  );
}

export default App;
