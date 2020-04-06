import React, { useEffect } from "react";
import { ApplicationProvider } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Login from "./components/Login";

const Stack = createStackNavigator();

const App: React.FC = () => {
  useEffect(() => {
    return;
  }, []);
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
