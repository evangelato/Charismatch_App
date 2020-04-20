/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Avatar, ListItem, ListItemProps, Text } from '@ui-kitten/components';
import { DoneAllIcon } from '../../../assets/icons';
import { Message } from './data';

export type MessageItemProps = ListItemProps & {
  message: Message;
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    tintColor: undefined,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    textAlign: 'right',
    minWidth: 64,
  },
});

export const MessageItem = (props: MessageItemProps): React.ReactElement => {
  const { message, ...listItemProps } = props;

  const renderMessageDate = (style: ViewStyle, index: number): React.ReactElement => (
    <View style={styles.dateContainer}>
      {message.isRead && <DoneAllIcon />}
      <Text style={styles.dateText} appearance="hint" category="c1">
        {message.date}
      </Text>
    </View>
  );

  const renderProfileAvatar = (): React.ReactElement => <Avatar style={styles.avatar} source={message.profile.photo} />;

  return (
    <ListItem
      {...listItemProps}
      title={message.profile.fullName}
      description={message.formattedText}
      icon={renderProfileAvatar}
      accessory={renderMessageDate}
    />
  );
};
