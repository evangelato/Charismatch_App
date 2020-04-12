import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "../routes";
import Login from "../../components/Login";
import Profile from "../../components/Profile";
import Activity from "../../components/Activity";
import Messages from "../../components/Messages";
import Settings from "../../components/Settings";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name={Routes.LOGIN} component={Login} />
        <Stack.Screen name={Routes.PROFILE} component={Profile} />
        <Stack.Screen name={Routes.ACTIVITY} component={Activity} />
        <Stack.Screen name={Routes.MESSAGES} component={Messages} />
        <Stack.Screen name={Routes.SETTINGS} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
