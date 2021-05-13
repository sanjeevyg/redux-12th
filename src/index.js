import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';


const count = (status=0, action) => {
  switch(action.type) {
    default:
      return status
    }
  }
  
  const characters = (status=[], action) => {
    switch(action.type) {
      case "GET_CHARACTERS":
        return "hello world"
        default:
          return status
        }
      }
      
  const rootReducer = combineReducers({
        count, 
        characters
      })
      
  const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
