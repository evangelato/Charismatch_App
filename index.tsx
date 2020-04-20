/* global __DEV__ */
import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import rootReducer from './src/reducers/rootReducer';
import App from './App';

if (__DEV__) {
  activateKeepAwake();
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(EntryPoint);
