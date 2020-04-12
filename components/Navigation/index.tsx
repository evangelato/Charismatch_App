import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout
} from "@ui-kitten/components";

interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8
  }
});

const PersonIcon = (style: any): ReactElement => (
  <Icon {...style} name="person-outline" />
);

const ActivityIcon = (style: any): ReactElement => (
  <Icon {...style} name="activity-outline" />
);

const MessageIcon = (style: any): ReactElement => (
  <Icon {...style} name="message-circle-outline" />
);

const SettingIcon = (style: any): ReactElement => (
  <Icon {...style} name="settings-outline" />
);

const Navigation: React.FC<Props> = ({ navigation }) => {
  const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

  const navigateToProfile = (): void => {
    console.log("test");
    navigation.navigate("Profile");
  };
  return (
    <Layout>
      <BottomNavigation
        style={styles.bottomNavigation}
        selectedIndex={bottomSelectedIndex}
        onSelect={setBottomSelectedIndex}
      >
        <BottomNavigationTab icon={PersonIcon} onPress={navigateToProfile} />
        <BottomNavigationTab
          icon={ActivityIcon}
          onPress={() => navigation.navigate("Activity")}
        />
        <BottomNavigationTab icon={MessageIcon} />
        <BottomNavigationTab icon={SettingIcon} />
      </BottomNavigation>
    </Layout>
  );
};

export default Navigation;
