/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Avatar, AvatarProps, ButtonElement, ButtonProps } from '@ui-kitten/components';

export interface ProfileAvatarProps extends AvatarProps {
  editButton: () => ButtonElement;
}

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  },
});

export const ProfileAvatar = (props: ProfileAvatarProps): React.ReactElement<ViewProps> => {
  const renderEditButtonElement = (): ButtonElement => {
    const { editButton } = props;
    const buttonElement: React.ReactElement<ButtonProps> = editButton();

    return React.cloneElement(buttonElement, {
      style: [buttonElement.props.style, styles.editButton],
    });
  };

  const { style, editButton, ...restProps } = props;

  return (
    <View style={style}>
      <Avatar style={[style, styles.avatar]} {...restProps} />
      {editButton && renderEditButtonElement()}
    </View>
  );
};
