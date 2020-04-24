import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Discover: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">DISCOVER</Text>
      <Button onPress={() => navigation.navigate('Login')}>Go Back</Button>
    </Layout>
  );
};

export default Discover;
