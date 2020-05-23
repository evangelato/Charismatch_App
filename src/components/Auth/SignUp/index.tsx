/* eslint-disable global-require */
import React, { useState } from 'react';
import { View, ImageStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import { Button, CheckBox, Input, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ImageOverlay } from './imageOverlay';
import { ProfileAvatar } from './profileAvatar';
import {
  EmailIcon,
  EyeIcon,
  EyeOffIcon,
  PencilIcon,
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  PlusIcon,
  TwitterIcon,
} from './icons';
import KeyboardAvoidingView from './keyboardAvoidingView';
import { signUp } from '../../../actions/userActions';

interface Props {
  navigation: any;
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 176,
  },
  profileAvatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignSelf: 'center',
    backgroundColor: 'background-basic-color-1',
    tintColor: 'text-hint-color',
  },
  editAvatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
  },
  termsCheckBoxText: {
    color: 'text-control-color',
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialAuthHintText: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  avatar: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

const SignUp: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const response = useSelector((state: any) => state.Users.response);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [warningText, setWarningText] = useState<string>('');

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = (): void => {
    // navigation.goBack();
    if (username === '') {
      setWarningText('Fill in the User Name');
    } else if (email === '') {
      setWarningText('Enter your email.');
    } else if (password === '') {
      setWarningText('Enter your password');
    } else if (!termsAccepted) {
      setWarningText('Agree to the Terms & Conditions');
    } else {
      dispatch(signUp(username, name, email, password));
    }
  };

  const onSignInButtonPress = (): void => {
    navigation.navigate('Login');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPhotoButton = (): React.ReactElement => (
    <Button style={styles.editAvatarButton} size="small" icon={PlusIcon} />
  );

  return (
    <KeyboardAvoidingView>
      <ImageOverlay style={styles.container} source={require('./assets/image-background.jpg')}>
        <View style={styles.headerContainer}>
          <ProfileAvatar
            style={styles.profileAvatar as ImageStyle}
            resizeMode="center"
            source={require('./assets/image-person.png')}
            editButton={renderPhotoButton}
          />
        </View>
        <View style={styles.formContainer}>
          <Input
            status="control"
            autoCapitalize="none"
            placeholder="User Name"
            icon={PersonIcon}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            style={styles.formInput}
            status="control"
            autoCapitalize="none"
            placeholder="Name"
            icon={PencilIcon}
            value={name}
            onChangeText={setName}
          />
          <Input
            style={styles.formInput}
            status="control"
            autoCapitalize="none"
            placeholder="Email"
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.formInput}
            status="control"
            autoCapitalize="none"
            secureTextEntry={!passwordVisible}
            placeholder="Password"
            icon={passwordVisible ? EyeIcon : EyeOffIcon}
            value={password}
            onChangeText={setPassword}
            onIconPress={onPasswordIconPress}
          />
          <CheckBox
            style={styles.termsCheckBox}
            textStyle={styles.termsCheckBoxText}
            text="I read and agree to Terms & Conditions"
            checked={termsAccepted}
            onChange={(checked: boolean) => setTermsAccepted(checked)}
          />
          <Text status="danger">{warningText}</Text>
        </View>
        <Button style={styles.signUpButton} size="giant" onPress={onSignUpButtonPress}>
          SIGN UP
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText} status="control">
            Or Register Using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button appearance="ghost" size="giant" status="control" icon={FacebookIcon} />
            <Button appearance="ghost" size="giant" status="control" icon={GoogleIcon} />
            <Button appearance="ghost" size="giant" status="control" icon={TwitterIcon} />
          </View>
        </View>
        <Button style={styles.signInButton} appearance="ghost" status="control" onPress={onSignInButtonPress}>
          Already have account? Sign In
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
