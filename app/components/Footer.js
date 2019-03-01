import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';


export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Display by:</Text>
          <View style={styles.footer}>
            <Button style={styles.button} onPress={()=>{}} title="All" />
            <Button style={styles.button} onPress={()=>{}} title="Completed" />
            <Button style={styles.button} onPress={()=>{}} title="Active" />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
     // height: '100%',
     justifyContent: 'center',
     alignItems: 'center'

  },

  footer:{
    // width: '100%',
     // height: '100%',
     // justifyContent: 'center',
     // alignItems: 'center',
     flexDirection:'row',
     // backgroundColor:'#1a86ad'
  },
  button: {
    backgroundColor:"green",
    marginLeft:"10px",


  },

  red: {
    color: 'red',
  },
});
