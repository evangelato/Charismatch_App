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
          </Stack.Navigator>
          <Navigation />
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
