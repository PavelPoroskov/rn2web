// //import App from './AppView'
// import App from './AppNav'

// export default App


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

// class App extends React.Component {
//   render() {
//     return <AppContainer />
//   }
// }

export default AppContainer
