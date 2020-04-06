import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import PropTypes from "prop-types";

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">HOME</Text>
      <Button onPress={() => navigation.navigate("Login")}>Go Back</Button>
    </Layout>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
