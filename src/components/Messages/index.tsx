import React from 'react';
import { Layout, Input, List } from '@ui-kitten/components';
import { StyleSheet, ListRenderItemInfo } from 'react-native';
import Constants from 'expo-constants';
import { SearchIcon } from '../../../assets/icons';
import { Message } from './data';
import { MessageItem } from './MessageItem';

interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  list: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#edf0f4',
  },
});

const initialMessages: Message[] = [Message.howAreYou(), Message.canYouSend(), Message.noProblem()];

const Messaging: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>();

  const onItemPress = (index: number): void => {
    navigation.navigate('Chat');
  };

  const renderItem = (info: ListRenderItemInfo<Message>): React.ReactElement => (
    <MessageItem style={styles.item} message={info.item} onPress={onItemPress} />
  );

  const renderHeader = (): React.ReactElement => (
    <Layout style={styles.header} level="1">
      <Input placeholder="Search" value={searchQuery} icon={SearchIcon} />
    </Layout>
  );

  return (
    <Layout style={styles.container}>
      <List style={styles.list} data={initialMessages} renderItem={renderItem} ListHeaderComponent={renderHeader} />
    </Layout>
  );
};

export default Messaging;
