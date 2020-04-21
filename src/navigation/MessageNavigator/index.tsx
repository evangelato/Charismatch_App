import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../routes';
import MessageList from '../../components/Messages';
import Chat from '../../components/Chat';

const Stack = createStackNavigator();

const MessageNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Messages" headerMode="none">
      <Stack.Screen name={Routes.MESSAGE_LIST} component={MessageList} />
      <Stack.Screen name={Routes.CHAT} component={Chat} />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
