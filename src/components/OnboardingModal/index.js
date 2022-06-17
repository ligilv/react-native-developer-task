import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackgroundBase,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import React, { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import SignupForm from "../../screens/Signup/SignupForm";
import LoginForm from "../../screens/Login/LoginForm";
const OnBoardingModal = ({ visible }) => {
  const [currentModal, setCurrentModal] = useState("login");
  const changeModal = (modalname) => {
    setCurrentModal(modalname);
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const modalVisible = (value) => {
    setModalOpen(value);
  };
  useEffect(() => {
    setModalOpen(visible.value);
  }, [visible]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => {
        setModalOpen(false);
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <BlurView
          blurType="dark"
          reducedTransparencyFallbackColor="black"
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              paddingBottom: 10,
            }}
            style={{}}
          >
            {currentModal == "login" ? (
              <LoginForm
                isModal={true}
                changeModal={changeModal}
                modalVisible={modalVisible}
              />
            ) : null}

            {currentModal == "signup" ? (
              <SignupForm
                //prop to check if its modal or screen
                isModal={true}
                //toggle from login/signup
                changeModal={changeModal}
                //visibility
                modalVisible={modalVisible}
              />
            ) : null}
          </ScrollView>
        </BlurView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default OnBoardingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
