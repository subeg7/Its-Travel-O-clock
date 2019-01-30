import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>-Noter-</Text>
       </View>

       {/* <ScrollView style={styles.scrollContainer}>

       </ScrollView > */}

       <View style={styles.footer}>
         <TextInput style={styles.textInput} placeholder="note" placeholderTextColor="green">
         </TextInput>
       </View>

       <TouchableOpacity style={styles.buttonText}>
        <Text style={styles.addButton}>+</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    color: 'red',
    fontSize:18,
    padding:26,
  },

  header:{
    color: '#fff',
    backgroundColor: '#405ae8',
    borderBottomWidth:10,
    borderBottomColor:'#af509c',
    justifyContent:'center',
  },

  scrollContainer:{
    color: '#0ff',
  },

  footer:{
    color: '#fff',
  },
  addButton:{
    color: 'white',
    fontSize:55
  },
  buttonText:{
    // position:'absolute',
    // zIndex:11,
    // right:20,
    // bottom:50,
    // fontSize:60,
    width:90,
    height:90,
    borderRadius:50,
    backgroundColor: '#405ae8',
    alignItems:'center',
    justifyContent:'center',
    
    

  },

  hetextInputader:{
    color: '#fff',
  }


});
