// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './rncliapp/App';
// //import App from 'quotes';

//// not recomended
// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<div>Test Div</div>, document.getElementById('root'));


//import React from 'react';
import { AppRegistry } from "react-native";
//import App from "./App";

//import App from './rncliapp/App';
import App from '../rncliapp/App';

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
})