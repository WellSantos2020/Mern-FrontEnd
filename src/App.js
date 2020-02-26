import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cities from './components/Cities';

export default function App() {
  return (
    <BrowserRouter>
        <div className="App">
  
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route  path='/cities' component={Cities} />
            </Switch>
        </div>
      
        
      </BrowserRouter>

      
      

    
  );
}


