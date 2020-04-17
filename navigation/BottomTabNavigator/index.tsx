import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../components/Profile';
import Activity from '../../components/Activity';
import Messages from '../../components/Messages';
import Settings from '../../components/Settings';
import HomeTabBar from '../../components/HomeTabBar';
import { ProfileIcon, ActivityIcon, MessageIcon, SettingsIcon } from '../../assets/icons';
import Routes from '../routes';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <HomeTabBar descriptors={props.descriptors} state={props.state} navigation={props.navigation} />}
    >
      <BottomTab.Screen name={Routes.PROFILE} component={Profile} options={{ tabBarIcon: ProfileIcon }} />
      <BottomTab.Screen name={Routes.ACTIVITY} component={Activity} options={{ tabBarIcon: ActivityIcon }} />
      <BottomTab.Screen name={Routes.MESSAGES} component={Messages} options={{ tabBarIcon: MessageIcon }} />
      <BottomTab.Screen name={Routes.SETTINGS} component={Settings} options={{ tabBarIcon: SettingsIcon }} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
