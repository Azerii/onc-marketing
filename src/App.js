import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router basename={'/website-development'}>
      <div className="App">
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/thank-you`} component={ThankYou} />
      </div>
    </Router>
  );
}

export default App;
