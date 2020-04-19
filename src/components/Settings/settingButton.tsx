/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Divider, Text } from '@ui-kitten/components';

interface SectionProps extends TouchableOpacityProps {
  hint: string;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const SettingButton: React.FC<SectionProps> = props => {
  const { style, hint, children, ...touchableOpacityProps } = props;

  return (
    <>
      <TouchableOpacity activeOpacity={1.0} {...touchableOpacityProps} style={[styles.container, style]}>
        <Text category="s2">{hint}</Text>
        {children}
      </TouchableOpacity>
      <Divider />
    </>
  );
};

export default SettingButton;
