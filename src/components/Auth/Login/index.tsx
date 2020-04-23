/* eslint-disable global-require */
import React from 'react';
import { Text, Button, Input } from '@ui-kitten/components';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import ImageOverlay from './imageOverlay';
import KeyboardAvoidingView from './keyboardAvoidingView';
import { EyeIcon, EyeOffIcon, FacebookIcon, GoogleIcon, PersonIcon, TwitterIcon } from '../../../../assets/icons';
// import BackgroundImage from '../../assets/auth_background.jpg';

interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 12,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
});

const Login: React.FC<Props> = ({ navigation }) => {
  /*
  const handleLogIn = (): void => {
    navigation.navigate('Main');
  };
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">LOGIN</Text>
      <Input placeholder="username" />
      <Input placeholder="password" />
      <Button onPress={handleLogIn}>Login</Button>
    </Layout>
  );
  */
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const onSignInButtonPress = (): void => {
    // navigation.goBack();
    navigation.navigate('Main');
  };

  const onSignUpButtonPress = (): void => {
    navigation.navigate('SignUp');
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView>
      <ImageOverlay style={styles.container} source={require('./assets/auth_background.jpg')}>
        <View style={styles.headerContainer}>
          <Text category="h1" status="control">
            Hello
          </Text>
          <Text style={styles.signInLabel} category="s1" status="control">
            Sign in to your account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input status="control" placeholder="Email" icon={PersonIcon} value={email} onChangeText={setEmail} />
          <Input
            style={styles.passwordInput}
            status="control"
            placeholder="Password"
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              status="control"
              onPress={onForgotPasswordButtonPress}
            >
              Forgot your password?
            </Button>
          </View>
        </View>
        <Button style={styles.signInButton} size="giant" onPress={onSignInButtonPress}>
          SIGN IN
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText} status="control">
            Or Sign In using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button appearance="ghost" status="control" size="giant" icon={GoogleIcon} />
            <Button appearance="ghost" status="control" size="giant" icon={FacebookIcon} />
            <Button appearance="ghost" status="control" size="giant" icon={TwitterIcon} />
          </View>
        </View>
        <Button style={styles.signUpButton} appearance="ghost" status="control" onPress={onSignUpButtonPress}>
          Don&apos;t have an account? Sign Up
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

export default Login;
