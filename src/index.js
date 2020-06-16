import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import {loadUser} from './store/actions/authActions'
import rootReducer from "./store/rootreducer";


 


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if(localStorage.token){
    store.dispatch(loadUser())
  }
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

