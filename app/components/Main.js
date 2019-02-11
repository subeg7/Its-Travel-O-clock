import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';
import Note from './Note';
import { createStore } from 'redux';
import {NoteReducer} from '../reducers/noteReducer'
import {combineReducers}from 'redux';



export default class Main extends React.Component {
  render(){
    return(
      <View>
      <TouchableOpacity>
         <Text>Hello Redux</Text>
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
    fontSize:30,
    paddingLeft:170,
    paddingTop:20,
    paddingRight:170,
  },

  header:{
    color: '#fff',
    backgroundColor: '#405ae8',
    borderBottomWidth:10,
    borderBottomColor:'#af509c',
    justifyContent:'center',
  },

  scrollContainer:{
    marginTop:-50,
    color: '#0ff',
    height:100,
  },

  footer:{
    color: '#fff',
  },
  addButton:{
    color: 'white',
    fontSize:55,
    position:'relative',
    // paddingTop:20
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
    // marginTop:600
    
  },
  
  noteText:{
    fontSize:20,
    backgroundColor:'green',
    
  },

  hetextInputader:{
    color: '#fff',
  }


});