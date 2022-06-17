import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const Card = ({children, style, ...rest}) => {
  return <View style={[styles.container, {...style}]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    width: '100%',
    borderWidth: 1,
    borderColor: '#35373B',
    borderRadius: 8,
    padding: 12,
  },
});
