import React from 'react';
import { Button, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ScrollView, ImageStyle } from 'react-native';
import Constants from 'expo-constants';
import { ProfileAvatar } from './profileAvatar';
import { ProfileSetting } from './profileSetting';
import { Profile as ProfileInfo } from './data';
import { CameraIcon } from './icons';

interface Props {
  navigation: any;
}

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-2',
    paddingTop: Constants.statusBarHeight,
  },
  contentContainer: {
    paddingVertical: 24,
    backgroundColor: 'background-basic-color-2',
    paddingBottom: 49,
  },
  photo: {
    alignSelf: 'center',
    width: 320,
    height: 320,
    borderRadius: 16,
  },
  photoButton: {
    right: 16,
    top: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  description: {
    padding: 24,
    backgroundColor: 'background-basic-color-1',
  },
  setting: {
    padding: 16,
  },
  section: {
    marginTop: 24,
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24,
  },
});

const profile: ProfileInfo = ProfileInfo.jenniferGreen();

const Profile: React.FC<Props> = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const onDoneButtonPress = (): void => {
    navigation.goBack();
  };

  const renderPhotoButton = (): React.ReactElement => (
    <Button style={styles.photoButton} status="basic" icon={CameraIcon} />
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ProfileAvatar style={styles.photo as ImageStyle} source={profile.photo} editButton={renderPhotoButton} />
      <Text style={[styles.description, styles.section]} appearance="hint">
        {profile.description}
      </Text>
      <ProfileSetting style={[styles.setting, styles.section]} hint="First Name" value={profile.firstName} />
      <ProfileSetting style={styles.setting} hint="Last Name" value={profile.lastName} />
      <ProfileSetting style={styles.setting} hint="Gender" value={profile.gender} />
      <ProfileSetting style={styles.setting} hint="Age" value={`${profile.age}`} />
      <ProfileSetting style={styles.setting} hint="Weight" value={`${profile.weight} kg`} />
      <ProfileSetting style={styles.setting} hint="Height" value={`${profile.height} cm`} />
      <ProfileSetting style={[styles.setting, styles.section]} hint="Email" value={profile.email} />
      <ProfileSetting style={styles.setting} hint="Phone Number" value={profile.phoneNumber} />
      <Button style={styles.doneButton} onPress={onDoneButtonPress}>
        DONE
      </Button>
    </ScrollView>
  );
};

export default Profile;
