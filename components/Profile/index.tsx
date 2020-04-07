import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";

interface Props {
  navigation: any;
}

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">PROFILE</Text>
      <Button onPress={() => navigation.navigate("Login")}>Go Back</Button>
    </Layout>
  );
};

export default Profile;
