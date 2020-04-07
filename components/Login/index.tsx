import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">LOGIN</Text>
      <Button onPress={() => navigation.navigate("Profile")}>Login</Button>
    </Layout>
  );
};

export default Login;
