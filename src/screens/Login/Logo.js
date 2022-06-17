import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {logo} from '../../assets';

const Logo = () => {
  return <Image source={logo} style={styles.logo} resizeMode="contain" />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});
