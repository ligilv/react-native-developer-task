import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { eye, logo } from "../../assets";
import Card from "../../components/card";
import CustomText from "../../components/customText";
import OnboardInput from "../../components/onboardInput";
import Icon from "react-native-vector-icons/dist/AntDesign";
import Feather from "react-native-vector-icons/dist/Feather";
import CustomButton from "../../components/customButton";
import { colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
const LoginForm = ({ isModal, changeModal, modalVisible }) => {
  const navigation = useNavigation();
  const navModal = () => {
    changeModal("signup");
  };
  const closeModal = () => {
    modalVisible(false);
  };
  const navTo = () => {
    navigation.navigate("Signup");
  };
  return (
    <Card style={styles.card}>
      {isModal ? (
        <View style={styles.crossContainer}>
          <TouchableOpacity style={styles.crossTouchable} onPress={closeModal}>
            <Feather name="x" color={colors.white} size={15} />
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={{ alignItems: "center" }}>
        <CustomText style={styles.welcomeText}>WELCOME BACK</CustomText>
        <CustomText style={styles.loginText}>Log into your account</CustomText>
      </View>
      <CustomText style={styles.email}>Email or Username</CustomText>
      <OnboardInput placeholder="Enter your email" />
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          justifyContent: "space-between",
        }}
      >
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          Password
        </CustomText>
        <CustomText style={styles.passwordText}>Forgot Password?</CustomText>
      </View>
      <OnboardInput
        placeholder="Your supersafe password "
        rightIcon={true}
        rIconName={eye}
      />
      <CustomButton
        style={{ marginTop: 20 }}
        textStyle={{ fontSize: 16 }}
        onPress={() => navigation.navigate("Home")}
      >
        Login now
      </CustomButton>
      <View
        style={{
          flexDirection: "row",
          marginTop: 14,
          alignItems: "center",
        }}
      >
        <CustomText
          style={{
            color: colors.textColor,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          Not registered yet?
        </CustomText>
        <TouchableOpacity
          onPress={isModal ? navModal : navTo}
          style={{ flexDirection: "row" }}
        >
          <CustomText style={styles.registerText}> Register</CustomText>
          <Icon
            name="arrowright"
            size={14}
            color={colors.white}
            style={{ paddingLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  card: {
    marginTop: 42,
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
  crossContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  crossTouchable: {
    borderRadius: 15 / 2,
    backgroundColor: colors.black,
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: colors.greyTextColor,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 40,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  email: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 34,
  },
  passwordText: {
    color: colors.textColor,
    fontSize: 12,
    fontWeight: "500",
  },
  registerText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
});
