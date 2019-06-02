import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './layout/Nav';
import ProjectList from './project/ProjectList';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './project/ProjectDetails';
import SignIn from './auth/SignIn';
import axios from 'axios';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav /> 
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/signin/' component={SignIn} />
      </Switch> 
      
      <div>
      <Route path='http://localhost:5000//'/>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

//