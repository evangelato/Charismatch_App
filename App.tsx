import React, { useEffect } from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  mapping,
  light as lightTheme,
  dark as darkTheme
} from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Activity from "./components/Activity";
import Messages from "./components/Messages";
import Settings from "./components/Settings";
import Navigation from "./components/Navigation";

const Stack = createStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    return;
  }, []);
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Activity" component={Activity} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
          <Navigation />
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
