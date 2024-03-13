/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {AppNavigator} from './AppNavigator';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#131415'} />
      <AppNavigator />
    </>
  );
}

export default App;
