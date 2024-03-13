import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {backgroundColor, primaryColor} from '../../const';

const Checkbox = ({checked, onPress, label}) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Icon name="check" size={12} color={backgroundColor} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: primaryColor,
    borderColor: primaryColor,
  },
  label: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
  },
});

export default Checkbox;
