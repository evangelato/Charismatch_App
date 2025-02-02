/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Layout, LayoutProps, Text } from '@ui-kitten/components';

export interface ProfileSettingProps extends LayoutProps {
  hint?: string;
  value: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const ProfileSetting = (props: ProfileSettingProps): React.ReactElement => {
  const { style, hint, value, ...layoutProps } = props;

  const renderHintElement = (): React.ReactElement => (
    <Text appearance="hint" category="s1">
      {hint}
    </Text>
  );

  return (
    <>
      <Layout level="1" {...layoutProps} style={[styles.container, style]}>
        {hint && renderHintElement()}
        <Text category="s1">{value}</Text>
      </Layout>
      <Divider />
    </>
  );
};
