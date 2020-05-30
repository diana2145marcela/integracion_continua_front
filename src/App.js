import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route  
} from "react-router-dom";

//Components
import Form from './components/form';
import Login from './components/login';
import Home from './components/home/home';

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