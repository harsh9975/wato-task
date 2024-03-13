/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Image,
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

const Screen1 = ({navigation}) => {
  const translateX = useSharedValue(40); // Initial value to start from the right

  // Start the animation
  React.useEffect(() => {
    translateX.value = withTiming(0, {
      duration: 1000,
      easing: Easing.elastic(1),
      reduceMotion: ReduceMotion.System,
    });
  }, []);

  // Define animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const handlePress = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#131415'} />

      <Image
        style={styles.sparkles}
        source={require('../assets/Sparkles.png')}
      />
      <Image style={styles.torch} source={require('../assets/Rays.png')} />
      <View style={styles.top}>
        <Animated.Image
          source={require('../assets/Logo.png')}
          style={[styles.image, animatedStyle]}
        />
        <Animated.Text style={[styles.text, animatedStyle]}>
          Zero Cost{'\n'}WhatsApp Messaging{'\n'}platform
        </Animated.Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <LinearGradient
            colors={['#2E2F30', '#141517']}
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.text2}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.secText}>
          Already have an account?{' '}
          <Text style={styles.primaryText} onPress={handlePress}>
            Sign in instead
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  sparkles: {
    width: '100%',
    position: 'absolute',
    left: 0,
    objectFit: 'cover',
    top: 0,
  },
  torch: {
    width: '100%',
    position: 'absolute',
    right: 0,
    objectFit: 'cover',
    top: 0,
  },
  text: {
    fontSize: 32,
    // fontWeight: '800',
    marginTop: 20,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
  },
  secText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  primaryText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
  },
});

export default Screen1;
