/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List, ListProps, StyleType } from '@ui-kitten/components';
import { ChatMessageContent } from './chatMessageContent';
import { ChatMessageGroup } from './chatMessageGroup';
import { ChatMessage } from './chatMessage';
import ChatService from './chat.service';
import { Message } from './data';

export interface ChatProps extends Omit<ListProps, 'renderItem'> {
  data: Message[];
  followEnd: boolean;
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'flex-end',
  },
  group: {
    marginVertical: 8,
  },
  message: {
    marginVertical: 4,
  },
});

const chatService: ChatService = new ChatService();

export const Chat = (props: ChatProps): React.ReactElement => {
  const listRef: React.RefObject<any> = React.useRef();
  let contentHeight = 0;

  const { followEnd, contentContainerStyle, data, ...listProps } = props;

  const shouldShowMessageIndicator = (message: Message): any => {
    return message.text && message.text.length > 0;
  };

  const scrollToOffset = (params: any): void => {
    listRef.current.scrollToOffset(params);
  };

  const scrollToEnd = (params: any): void => {
    scrollToOffset({ offset: contentHeight, ...params });
  };

  const scrollToIndex = (params: any): void => {
    listRef.current.scrollToIndex(params);
  };

  const onContentSizeChange = (width: number, height: number): void => {
    contentHeight = height;

    props.followEnd && setTimeout(scrollToEnd, 0);

    listProps.onContentSizeChange && listProps.onContentSizeChange(width, height);
  };

  const renderMessageContent = (message: Message, style: StyleType): React.ReactElement => (
    <ChatMessageContent style={style.container}>{message}</ChatMessageContent>
  );

  const renderMessage = (message: Message): React.ReactElement => (
    <ChatMessage style={styles.message} message={message} shouldShowIndicator={shouldShowMessageIndicator(message)}>
      {renderMessageContent}
    </ChatMessage>
  );

  const renderMessageGroup = (info: ListRenderItemInfo<Message[]>): React.ReactElement => (
    <ChatMessageGroup style={styles.group} data={info.item} renderItem={renderMessage} />
  );

  return (
    <List
      ref={listRef}
      {...listProps}
      data={chatService.createMessageGroups(data)}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      onContentSizeChange={onContentSizeChange}
      renderItem={renderMessageGroup}
    />
  );
};
