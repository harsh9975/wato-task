/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  backgroundColor,
  height,
  primaryColor,
  windowHeight,
  windowWidth,
} from '../const';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import Textfield from '../components/Textfield/Textfield';
import Button from '../components/Button/Button';
import {isValidPassword, validateEmail} from '../utils';

const Screen2 = ({navigation}) => {
  const [email, setEmail] = React.useState({value: '', error: ''});
  const [password, setPassword] = React.useState({value: '', error: ''});
  //   const [error, setError] = React.useState('');

  const handleEmailChange = text => {
    setEmail({value: text, error: ''});
    // setError('');
  };

  const handlePasswordChange = text => {
    setPassword({value: text, error: ''});
    // setError('');
  };

  const handleSubmit = () => {
    let emailError = '';
    let passwordError = '';

    if (!email.value) {
      emailError = 'Please enter your email.';
    } else if (!validateEmail(email.value)) {
      emailError = 'Please enter valid email.';
    }

    if (!password.value) {
      passwordError = 'Please enter your password.';
    } else if (!isValidPassword(password.value)) {
      passwordError = 'Password must be at least 8 characters long.';
    }

    setEmail(prevState => ({...prevState, error: emailError}));
    setPassword(prevState => ({...prevState, error: passwordError}));

    if (emailError || passwordError) {
      return;
    }

    console.log(email.value, password.value);
  };

  const translateX = useSharedValue(40); // Initial value to start from the right

  React.useEffect(() => {
    translateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.elastic(1),
      reduceMotion: ReduceMotion.System,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const handlePress = () => {
    navigation.navigate('Screen3');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView style={styles.formContainer} behavior="padding">
        <StatusBar barStyle={'light-content'} backgroundColor={'#131415'} />

        <Animated.Text style={[styles.text, animatedStyle]}>
          Please sign-in to your account
        </Animated.Text>
        <Animated.View style={[styles.card, animatedStyle]}>
          <LinearGradient
            colors={['#2E2F30', '#FFFFFF30']}
            style={styles.gradient}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Textfield
              placeholder="Email"
              value={email.value}
              onChange={handleEmailChange}
              type="email"
              errorText={email.error}
            />
            <Textfield
              placeholder="Password"
              value={password.value}
              onChange={handlePasswordChange}
              type="password"
              errorText={password.error}
            />
            <Text style={styles.primaryText}>Forgot Password?</Text>
            <Button title="Login" onPress={handleSubmit} />
            <Text style={styles.secText}>
              New to our platform?{' '}
              <Text style={styles.primaryText} onPress={handlePress}>
                Create an account
              </Text>
            </Text>
            <Text style={[styles.secText, {marginVertical: 20}]}>or</Text>
            <Button
              title="Continue With Google"
              type="outlined"
              onPress={handleSubmit}
              icon={
                <Image
                  style={styles.icon}
                  source={require('../assets/googlelogo.png')}
                />
              }
            />
          </LinearGradient>
        </Animated.View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
  text2: {
    fontSize: 18,
    // fontWeight: '800',
    color: 'white',
    fontFamily: 'Inter-Regular',
  },
  image: {
    height: 60,
    width: 152,
    objectFit: 'cover',
  },
  top: {
    marginTop: windowHeight * 0.37,
    paddingHorizontal: 20,
    width: windowWidth,
  },
  button: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    overflow: 'hidden',
    marginTop: windowHeight * 0.08,
    marginBottom: 13,
  },
  gradient: {
    borderRadius: 10,
    width: '100%',
    padding: 20,
  },
  secText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  primaryText: {
    color: primaryColor,
    textAlign: 'right',
    width: '100%',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
    marginBottom: 20,
    // marginTop: 10,
  },
  card: {
    width: '100%',
    minHeight: 200,
    // maxHeight: '100%',
    // overflow: 'hidden',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Screen2;
