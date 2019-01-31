import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';
import Note from './Note';

export default class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      noteArray:[],
      noteText:'',
    }
  }
  render() {
    let notes = this.state.noteArray.map( (val,key)=>{
      return <Note key={key} keyval={key} val={val}
        deleteMethod={()=>this.deleteNote(key)}/>
    });
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>-Noter-</Text>
       </View>

       {/* <ScrollView style={styles.scrollContainer}>

       </ScrollView > */}

       <View style={styles.footer}>
         <TextInput style={styles.textInput} 
         onChangeText={(noteText)=>this.setState({noteText})}
         value={this.state.noteText}
         placeholder="note" 
         placeholderTextColor="green">
         </TextInput>
       </View>

       <TouchableOpacity 
       onPress={this.addNote.bind(this)}
       style={styles.buttonText}>
        <Text style={styles.addButton}>+</Text>
       </TouchableOpacity>
      </View>
    );
  }

  addNote(){
    
    alert('test passed');
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
