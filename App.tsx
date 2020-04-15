import React, { useEffect } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  // useEffect(() => {}, []);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};

export default App;
