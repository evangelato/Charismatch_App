/* eslint-disable global-require */
import React from 'react';
import { ImageSourcePropType, Keyboard, Platform } from 'react-native';
import { Button, Input, StyleService, useStyleSheet, Layout } from '@ui-kitten/components';
import Constants from 'expo-constants';
import { KeyboardAvoidingView } from './keyboardAvoidingView';
import { Chat } from './chat';
import { AttachmentsMenu } from './attachmentsMenu';
import { MicIcon, PaperPlaneIcon, PlusIcon } from './icons';
import { Message } from './data';

interface Props {
  navigation: any;
}

const initialMessages: Message[] = [
  Message.howAreYou(),
  Message.imFine(),
  Message.imFineToo(),
  Message.walkingWithDog(),
  Message.imageAttachment1(),
  Message.imageAttachment2(),
  Message.canIJoin(),
  Message.sure(),
];
const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  messageInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'background-basic-color-1',
  },
  attachButton: {
    borderRadius: 24,
    marginHorizontal: 8,
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  sendButton: {
    marginRight: 4,
  },
  iconButton: {
    width: 24,
    height: 24,
  },
});
const galleryAttachments: ImageSourcePropType[] = [
  require('./assets/image-attachment-1.png'),
  require('./assets/image-attachment-2.jpg'),
  require('./assets/image-attachment-1.png'),
  require('./assets/image-attachment-2.jpg'),
];

const keyboardOffset = (height: number): number =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  Platform.select({
    android: 0,
    ios: height,
  })!;

const MessageLayout: React.FC<Props> = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [message, setMessage] = React.useState<string>('');
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = React.useState<boolean>(false);

  const sendButtonEnabled = (): boolean => {
    return message.length > 0;
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    setMessages([...messages, new Message(message, 'now', true, null)]);
    setMessage('');
    Keyboard.dismiss();
  };

  const renderAttachmentsMenu = (): React.ReactElement => (
    <AttachmentsMenu
      attachments={galleryAttachments}
      onSelectPhoto={toggleAttachmentsMenu}
      onSelectFile={toggleAttachmentsMenu}
      onSelectLocation={toggleAttachmentsMenu}
      onSelectContact={toggleAttachmentsMenu}
      onAttachmentSelect={toggleAttachmentsMenu}
      onCameraPress={toggleAttachmentsMenu}
      onDismiss={toggleAttachmentsMenu}
    />
  );

  return (
    <Layout style={styles.container}>
      <Chat style={styles.list} contentContainerStyle={styles.listContent} followEnd data={messages} />
      <KeyboardAvoidingView style={styles.messageInputContainer} offset={keyboardOffset}>
        <Button style={[styles.iconButton, styles.attachButton]} icon={PlusIcon} onPress={toggleAttachmentsMenu} />
        <Input
          style={styles.messageInput}
          placeholder="Message..."
          value={message}
          onChangeText={setMessage}
          icon={MicIcon}
        />
        <Button
          appearance="ghost"
          style={[styles.iconButton, styles.sendButton]}
          icon={PaperPlaneIcon}
          disabled={!sendButtonEnabled()}
          onPress={onSendButtonPress}
        />
      </KeyboardAvoidingView>
      {attachmentsMenuVisible && renderAttachmentsMenu()}
    </Layout>
  );
};

export default MessageLayout;
