/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
} from 'react-native';
import { Container, NativeBaseProvider, View } from 'native-base';
import { ScreenFirts } from './src/Components/ScreenFirts';


const App = () => {

  return (
    <NativeBaseProvider>
      <View bg={"dark.600"} style={{flex:1}}>

        <ScreenFirts />
      </View>
    </NativeBaseProvider>
  );
};


{
    /* 
  */}
export default App;
