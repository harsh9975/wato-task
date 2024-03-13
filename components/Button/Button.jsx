import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {backgroundColor, primaryColor} from '../../const';

const Button = ({
  title,
  onPress,
  customStyle,
  type = 'filled',
  icon,
  ...props
}) => {
  const buttonStyles =
    type === 'filled' ? styles.buttonFilled : styles.buttonOutlined;
  const textStyles =
    type === 'filled' ? styles.textFilled : styles.textOutlined;

  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, buttonStyles, customStyle]}
      onPress={onPress}>
      {icon}
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    gap: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonFilled: {
    backgroundColor: primaryColor,
  },
  textFilled: {
    color: backgroundColor,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  textOutlined: {
    color: 'white',
  },
});

export default Button;
