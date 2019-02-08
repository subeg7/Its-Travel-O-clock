import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';

import Main from'./app/components/Main';

function myReducer(state,action){
  switch(action.type) {
    case 'TODO_ADD' : {
      console.log("Reducer is trying to add the list");
      return state;
    }
    case 'TODO_TOGGLE' : {
      console.log("Reducer is trying to Toogle");
      return state;
    }
    default : return state;
  }

}


const store = createStore(myReducer);

addAction={
  type: 'TODO_ADD',
  todo: { id: '0', name: 'learn redux', completed: false }
}

export default class App extends React.Component {
// start();

// start(){
//   console.log("startig the redux");
// }

// 

  render() {

    return (
      // <View>
      //     <Text>Hello Man</Text>
      // </View>
      <Main/>
    );
  }
}



// <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />



// ...this...this......this...this...this...this...this...this...this...this...this......this...this.
// Redux components

// var React = require('react-native');
// var {AppRegistry, StyleSheet , Text,View} = React;
// var Login = require('./app/components/login');
// var userReducers = require('./app/reducers/user');

// import{ createStore} from 'redux';
// import {combineReducers}from 'redux';
// import {Provider} from 'react-redux';
// // import userReducers from './app/reducers/user'

// let store = createStore(combineReducers({userReducers}));

// class App extends React.Components{
//   render(){
//     return(
//       <Login/>
//     );
//   }
// }

// class MyApp extends React.Component{
//   render(){
//     return(
//       <Provider store ={store}>
//         {()=> <App/>}
//       </Provider>
//     )
//   }
// }

// export default store;