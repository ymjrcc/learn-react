import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage';
import Lesson01 from './routes/Lesson01/';
import Lesson02 from './routes/Lesson02/';
import Lesson03 from './routes/Lesson03/';
import Lesson04 from './routes/Lesson04/';
import Lesson05 from './routes/Lesson05/';
import Lesson06 from './routes/Lesson06/';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/lesson01" component={Lesson01} />
          <Route path="/lesson02" component={Lesson02} />
          <Route path="/lesson03" component={Lesson03} />
          <Route path="/lesson04" component={Lesson04} />
          <Route path="/lesson05" component={Lesson05} />
          <Route path="/lesson06" component={Lesson06} />
        </Switch>
      </div>
    );
  }
}

export default App;
