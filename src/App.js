// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PlacesSearch from './components/PlacesSearch';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>Google Places Autocomplete</h1>
        <PlacesSearch />
      </div>
    </Provider>
  );
};

export default App;
