import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const store = createStore(reducer, middleware)

root.render(
    <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
    </BrowserRouter>    
);
