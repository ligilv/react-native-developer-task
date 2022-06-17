import React from 'react';
import {Text, View} from 'react-native';

function CustomText({
  //   Font = 'Inter-Regular',
  Size = 14,
  Color = 'white',
  value = '',
  style = {},
  onPress,
  children,
}) {
  return (
    <Text
      onPress={onPress}
      style={[
        {
          //   fontFamily: Font,
          fontSize: Size,
          color: Color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}

export default CustomText;
