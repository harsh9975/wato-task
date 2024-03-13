/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const Textfield = ({
  placeholder,
  value,
  onChange,
  customStyle,
  type = 'text',
  errorText,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(type === 'password');

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={{marginBottom: 20}}>
      <View style={[styles.container, customStyle]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry && type === 'password'}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={toggleSecureEntry}
            style={styles.toggleButton}>
            <Text>
              {secureTextEntry ? (
                <Icon name="eye" size={20} color="#fff" />
              ) : (
                <Icon name="eye-closed" size={20} color="#fff" />
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    // marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  toggleButton: {
    padding: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Textfield;
