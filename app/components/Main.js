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

       <TouchableOpacity>
        <Text>+</Text>
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

  hetextInputader:{
    color: '#fff',
  }


});
