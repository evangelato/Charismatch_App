import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    return;
  }, []);
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  );
};

export default App;
