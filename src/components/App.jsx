import React, { FC, useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home';
import Launcher from './Launcher';

const App = () => {
  return (
  <Router>
    <Route path="/app" component={Home} />
    <Route path="/" component={Launcher} exact />
  </Router>
  );
};

export default App;
