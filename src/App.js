import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route  
} from "react-router-dom";

//Components
import Form from './components/Form';
import Login from './components/Login';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/registro' component={Form} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;