import React from 'react';
import { ScrollViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyboardAvoidingView = (props: any): React.ReactElement => {
  const defaultProps: ScrollViewProps = {
    style: { flex: 1 },
    contentContainerStyle: { flexGrow: 1 },
    bounces: false,
    bouncesZoom: false,
    alwaysBounceVertical: false,
    alwaysBounceHorizontal: false,
  };

  return React.createElement(KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
};

export default KeyboardAvoidingView;
