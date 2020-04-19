import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Layout, Toggle } from '@ui-kitten/components';
import Setting from './settingButton';

interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  setting: {
    padding: 16,
  },
  section: {
    paddingTop: 32,
  },
});

const Settings: React.FC<Props> = ({ navigation }) => {
  const [soundEnabled, setSoundEnabled] = React.useState<boolean>(false);

  const toggleSound = (): void => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <Layout style={styles.container}>
      <Setting style={styles.setting} hint="Edit Profile" />
      <Setting style={styles.setting} hint="Change Password" />
      <Setting style={[styles.setting, styles.section]} hint="Notification" />
      <Setting style={styles.setting} hint="Privacy" />
      <Setting style={[styles.setting, styles.section]} hint="Sound Enabled" onPress={toggleSound}>
        <Toggle checked={soundEnabled} onChange={toggleSound} />
      </Setting>
      <Setting style={[styles.setting, styles.section]} hint="Dark Mode" onPress={toggleSound}>
        <Toggle checked={soundEnabled} onChange={toggleSound} />
      </Setting>
    </Layout>
  );
};

export default Settings;
