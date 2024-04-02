/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
//import React, {useState, useEffect, useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import {AppContext, useAppIsActive} from './context'
import AboutScreen from './AboutScreen'
import QuotesScreen from './QuotesScreen'

const Stack = createNativeStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quotes">
        <Stack.Screen name="Quotes" component={QuotesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer
