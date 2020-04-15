import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../routes';
import AuthNavigator from '../AuthNavigator';
import BottomTabNavigator from '../BottomTabNavigator';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name={Routes.AUTH} component={AuthNavigator} />
        <Stack.Screen name={Routes.MAIN} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
