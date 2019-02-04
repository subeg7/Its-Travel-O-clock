import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from'./app/components/Main';

export default class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }
}



// <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//       />