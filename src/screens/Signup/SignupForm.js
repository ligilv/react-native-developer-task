import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React from 'react';
import {eye, logo} from '../../assets';
import Card from '../../components/card';
import CustomText from '../../components/customText';
import OnboardInput from '../../components/onboardInput';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import CustomButton from '../../components/customButton';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
const SignupForm = ({isModal, changeModal, modalVisible}) => {
  const navigation = useNavigation();
  const navModal = () => {
    changeModal('login');
  };
  const navTo = () => {
    navigation.navigate('Login');
  };
  const closeModal = () => {
    modalVisible(false);
  };
  return (
    <Card
      style={{
        marginTop: 42,
        paddingBottom: 40,
        paddingHorizontal: 12,
      }}>
      {isModal ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 15 / 2,
              backgroundColor: colors.black,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={closeModal}>
            <Feather name="x" color={colors.white} size={15} />
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={{alignItems: 'center'}}>
        <CustomText
          style={{
            color: colors.greyTextColor,
            fontSize: 14,
            fontWeight: '500',
            marginTop: 40,
          }}>
          SIGN UP
        </CustomText>
        <CustomText
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 8,
          }}>
          Create an account to continue
        </CustomText>
      </View>
      <CustomText
        style={{
          color: colors.textColor,
          fontSize: 14,
          fontWeight: '500',
          marginTop: 34,
        }}>
        Email
      </CustomText>
      <OnboardInput placeholder="Enter your email" />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          justifyContent: 'space-between',
        }}>
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Username
        </CustomText>
      </View>
      <OnboardInput placeholder="Choose a preferred username" />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          justifyContent: 'space-between',
        }}>
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Password
        </CustomText>
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 12,
            fontWeight: '500',
          }}>
          Forgot Password?
        </CustomText>
      </View>
      <OnboardInput
        placeholder="Your supersafe password "
        rightIcon={true}
        rIconName={eye}
      />
      <CustomButton
        style={{marginTop: 20}}
        textStyle={{fontSize: 16}}
        onPress={() => navigation.navigate('Home')}>
        Continue
      </CustomButton>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 14,
          alignItems: 'center',
        }}>
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Already have an account?
        </CustomText>
        <TouchableOpacity
          onPress={isModal ? navModal : navTo}
          style={{flexDirection: 'row'}}>
          <CustomText
            style={{
              color: colors.white,
              fontSize: 14,
              fontWeight: '500',
            }}>
            {' '}
            Login
          </CustomText>
          <Icon
            name="arrowright"
            size={14}
            color={colors.white}
            style={{paddingLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default SignupForm;

const styles = StyleSheet.create({});