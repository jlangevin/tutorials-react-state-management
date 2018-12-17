import React, { Component } from 'react';
import { Switch, Route } from 'react-router'

import Header from './components/Header/Header';
import Props from './components/PropsExample/PropsExample';
import Context from './components/ContextExample/ContextExample';
import Redux from './components/ReduxExample/ReduxExample';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/props' component={Props}/>
          <Route path='/context' component={Context}/>
          <Route path='/redux' component={Redux}/>
          <Route component={Props}/>
        </Switch>
      </div>
    );
  }
}

export default App;
