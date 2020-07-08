import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cities from './components/Cities';
import Itinerary from './components/Itinerary';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login'
import {loadUser} from './store/actions/authActions';
import Test from './components/Test';
import Comments from './components/Comments';


 


export default function App() {
  return (
    <BrowserRouter>
        <div className="App">
  
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route  path='/cities' component={Cities} />
              <Route path='/itineraries' component={Itinerary}/>
              <Route path='/register' component={CreateAccount}/>
              <Route path='/Login' component={Login}/>
              <Route path='/comment' component={Comments}/>
             
            </Switch>
        </div>
      
        
      </BrowserRouter>

      
      

    
  );
}


