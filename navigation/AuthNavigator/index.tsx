import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../routes";
import Login from "../../components/Login";

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name={Routes.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
