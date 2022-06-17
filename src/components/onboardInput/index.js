import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const OnboardInput = ({
  placeholder,
  style,
  leftIcon,
  rightIcon,
  rIconName,
  lIconName,
  lIconStyle,
  rIconStyle,
  backgroundColor,
  inputHeight,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderColor: '#35373B',
          borderWidth: 1.5,
          borderRadius: 4,
          // padding: 100,
          paddingHorizontal: 10,
          marginTop: 10,
          height: inputHeight ? inputHeight : 43,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor ? backgroundColor : colors.primaryBg,
        },
        style,
      ]}>
      {leftIcon ? <Image source={lIconName} style={lIconStyle} /> : null}
      <TextInput
        style={{
          color: colors.textColor,
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: backgroundColor ? backgroundColor : colors.primaryBg,
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderColor}
      />
      {rightIcon ? <Image source={rIconName} style={rIconStyle} /> : null}
    </View>
  );
};

export default OnboardInput;

const styles = StyleSheet.create({});
