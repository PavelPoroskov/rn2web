/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
//import React, {useState, useEffect, useCallback} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

//import {AppContext, useAppIsActive} from './context'
import AboutScreen from './AboutScreen'
import QuotesScreen from './QuotesScreen'


const MainNavigator = createStackNavigator({
  About: {screen: AboutScreen},
  Quotes: {screen: QuotesScreen},
},
{
  //debug
  //initialRouteName: "About",
  initialRouteName: "Quotes"
});

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer

// class App extends React.Component {
//   render() {
//     console.log('render AppContainer')
//     return <AppContainer />
//   }
// }

// export default App
