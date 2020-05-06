import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantComponent from './components/RestaurantComponent';
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <RestaurantComponent/>
      </Provider>
    </div>
  );
}

export default App;
