import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../components/customText';
import {colors} from '../../constants/colors';
import Card from '../../components/card';
import OnboardInput from '../../components/onboardInput';
import {chatIcon, comment, user1} from '../../assets';
import {mockdata} from './data';
import CustomButton from '../../components/customButton';
import PostSection from './postSection';
import {useNavigation} from '@react-navigation/native';
import OnBoardingModal from '../../components/OnboardingModal';
const Home = () => {
  const navigation = useNavigation();
  const randomKey = () => {
    return Math.random();
  };
  const random = randomKey();
  const [modalVisible, setModalVisible] = useState({value: false, key: 0.1});
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 100}}
      style={{
        paddingTop: 80,
        paddingHorizontal: 16,
        backgroundColor: colors.black,
      }}>
      <CustomText
        style={{color: colors.white, fontWeight: '500', fontSize: 28}}>
        Hello Jane
      </CustomText>
      <CustomText
        style={{
          color: colors.greyTextColor,
          fontWeight: '400',
          fontSize: 16,
          lineHeight: 25,
        }}>
        How are you doing today? Would you like to share something with the
        community 🤗
      </CustomText>
      <Card
        style={{
          paddingTop: 24,
          paddingHorizontal: 12,
          paddingBottom: 24,
          marginTop: 32,
        }}>
        <CustomText
          style={{
            color: colors.white,
            fontWeight: '500',
            fontSize: 18,
          }}>
          Create post
        </CustomText>
        <OnboardInput
          inputHeight={54}
          backgroundColor={colors.inputBlackShade}
          placeholder="How are you feeling today?"
          leftIcon={true}
          lIconName={chatIcon}
          lIconStyle={{
            borderRadius: 30 / 2,
            backgroundColor: colors.primaryBg,
            width: 30,
            height: 30,
            padding: 18,
          }}
        />
        <CustomButton
          onPress={() => {
            //hack to open modal each time for ui purpose only
            setModalVisible({value: true, key: random});
          }}
          style={{
            marginLeft: 244,
            marginTop: 12,
          }}>
          Post
        </CustomButton>
      </Card>
      <PostSection />
      <OnBoardingModal visible={modalVisible} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
