import React from 'react';
import AppNavigationContainer from './app/navigations/appNavigationContainer';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
}

export default App;
