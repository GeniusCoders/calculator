import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../style/colors';

const CalButton = ({
  text,
  isRadius = false,
  isEqualButton = false,
  textColor = colors.textColor,
  splCharBackColor = colors.background,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isRadius && {backgroundColor: splCharBackColor, borderRadius: 30},
        isEqualButton && {backgroundColor: colors.primaryColor},
      ]}>
      <Text
        style={[
          styles.text,
          {color: textColor},
          isEqualButton && {color: '#fff'}
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    height: 60,
    width: 60
  },
  text: {
    fontSize: 28,
    fontWeight: '700'
  }
});

export default CalButton;
