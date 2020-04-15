/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { Icon } from '@ui-kitten/components';

export const PersonIcon = (style: any): ReactElement => <Icon {...style} name="person-outline" />;

export const ActivityIcon = (style: any): ReactElement => <Icon {...style} name="activity-outline" />;

export const MessageIcon = (style: any): ReactElement => <Icon {...style} name="message-circle-outline" />;

export const SettingsIcon = (style: any): ReactElement => <Icon {...style} name="settings-outline" />;
