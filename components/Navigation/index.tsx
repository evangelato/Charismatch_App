import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Layout
} from "@ui-kitten/components";

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

const Navigation: React.FC = () => {
  const [topSelectedIndex, setTopSelectedIndex] = React.useState(0);
  // const [bottomSelectedIndex, setBottomSelectedIndex] = React.useState(0);

  return (
    <Layout>
      <BottomNavigation
        style={styles.bottomNavigation}
        selectedIndex={topSelectedIndex}
        onSelect={setTopSelectedIndex}
      >
        <BottomNavigationTab icon={PersonIcon} />
        <BottomNavigationTab icon={ActivityIcon} />
        <BottomNavigationTab icon={MessageIcon} />
        <BottomNavigationTab icon={SettingIcon} />
      </BottomNavigation>
    </Layout>
  );
};

export default Navigation;
