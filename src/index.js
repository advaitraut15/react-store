import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// import redux packages
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import cartReducer from './store/reducers/cartReducer';
import productsReducer from './store/reducers/productsReducer'
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

//combine all reducers using combineReducers  

const rootReducer = combineReducers({
  productsReducer,
  cartReducer
})

//create store
const store = createStore(rootReducer)
// const store = configureStore({
//   rootReducer
// })
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//features to add
//wishlist
//search
//filter
