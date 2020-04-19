import React, { useEffect } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { logger } from 'redux-logger';
import AppNavigator from './src/navigation/AppNavigator';
import rootReducer from './src/reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

const App: React.FC = () => {
  // useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <AppNavigator />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
