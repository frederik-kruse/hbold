import React from "react";
import Webmaster from './Assets/Pages/Webmaster/Webmaster';
import Foraeldregruppen from './Assets/Pages/Foraeldregruppen/Foraeldregruppen';
import './app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/Foraeldregruppen" component={Foraeldregruppen} />
    <Route path="/" component={Webmaster} exact />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
