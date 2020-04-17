/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

interface Style extends ImageStyle {
  focused: boolean;
  color: string;
  size: number;
}

export const ProfileIcon = (style: Style): IconElement => <Icon {...style} name="person-outline" />;

export const ActivityIcon = (style: Style): IconElement => <Icon {...style} name="activity-outline" />;

export const MessageIcon = (style: Style): IconElement => <Icon {...style} name="message-circle-outline" />;

export const SettingsIcon = (style: Style): IconElement => <Icon {...style} name="settings-outline" />;

export const EyeIcon = (style: ImageStyle): IconElement => <Icon {...style} name="eye" />;

export const EyeOffIcon = (style: ImageStyle): IconElement => <Icon {...style} name="eye-off" />;

export const FacebookIcon = (style: ImageStyle): IconElement => <Icon {...style} name="facebook" />;

export const GoogleIcon = (style: ImageStyle): IconElement => <Icon {...style} name="google" />;

export const PersonIcon = (style: ImageStyle): IconElement => <Icon {...style} name="person" />;

export const TwitterIcon = (style: ImageStyle): IconElement => <Icon {...style} name="twitter" />;
