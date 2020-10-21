import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/Home';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='https://oncmarketing.com/website-development/' component={Home} />
        <Route exact path='https://oncmarketing.com/website-development/thank-you' component={ThankYou} />
      </div>
    </Router>
  );
}

export default App;
