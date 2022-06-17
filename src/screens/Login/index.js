import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {eye, logo} from '../../assets';
import Card from '../../components/card';
import CustomText from '../../components/customText';
import OnboardInput from '../../components/onboardInput';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';
import Logo from './Logo';
import LoginForm from './LoginForm';
const Login = ({isModal}) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Logo />
      <LoginForm />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 32,
    height: 32,
  },
});
