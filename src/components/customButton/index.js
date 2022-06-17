import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import CustomText from '../customText';

const CustomButton = ({children, style, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          borderRadius: 4,
          backgroundColor: colors.primaryBtnColor,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 12,
        },
        style,
      ]}>
      <CustomText
        style={[
          {
            color: colors.buttonTextColor,
            fontSize: 14,
            fontWeight: '500',
            // marginTop: 40,
          },
          textStyle,
        ]}>
        {children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
