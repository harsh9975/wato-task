import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={{backgroundColor: 'white'}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
