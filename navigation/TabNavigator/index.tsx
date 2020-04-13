import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import Profile from "../../components/Profile";
import Activity from "../../components/Activity";
import Messages from "../../components/Messages";
import Settings from "../../components/Settings";
import Navigation from "../../components/Navigation";

const Stack = createStackNavigator();

const TabNavigator: React.FC = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName="Profile" headerMode="none">
        <Stack.Screen name={Routes.PROFILE} component={Profile} />
        <Stack.Screen name={Routes.ACTIVITY} component={Activity} />
        <Stack.Screen name={Routes.MESSAGES} component={Messages} />
        <Stack.Screen name={Routes.SETTINGS} component={Settings} />
      </Stack.Navigator>
      <Navigation />
    </React.Fragment>
  );
};

export default TabNavigator;
