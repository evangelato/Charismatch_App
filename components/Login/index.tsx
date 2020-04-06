import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
//import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import PropTypes from "prop-types";

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">LOGIN</Text>
      <Button onPress={() => navigation.navigate("Home")}>Login</Button>
    </Layout>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Login;
