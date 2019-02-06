// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import Main from'./app/components/Main';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Main/>
//     );
//   }
// }



// // <TextInput
// //         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
// //         onChangeText={(text) => this.setState({text})}
// //         value={this.state.text}
// //       />



// ...this...this......this...this...this...this...this...this...this...this...this......this...this.
// Redux components

var React = require('react-native');
var {AppRegistry, StyleSheet , Text,View} = React;
var Login = require('./app/components/login');
var userReducers = require('./src/reducers/user');

import{ createStore,combineReducers} from 'react-redux';
import {Provider} from 'react-redux/native';

let store = createStore(combineReducers({userReduccers}));

class App extends React.Components{
  render(){
    return(
      <Login/>
    );
  }
}

class MyApp extends React.Component{
  render(){
    return(
      <Provider store ={store}>
        {()=> <App/>}
      </Provider>
    )
  }
}