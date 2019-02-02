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
      newNote:''
    }
  }
  render() {
    // let notes = this.state.noteArray.map( (val,key)=>{
    //   return <Note key={key} keyval={key} val={val}
    //     deleteMethod={()=>this.deleteNote(key)}/>
    // });

    let notes = ["hello theres","is this amazing"];

    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>-Noter-</Text>
       </View>

       {/* <ScrollView style={styles.scrollContainer}> */}
       {/* {notes} */}
         {/* <Text>{}</Text>  */}
         {this.state.noteArray}
       {/* </ScrollView > */}

       <View style={styles.footer}>
         <TextInput style={styles.textInput} 
         onChangeText={(noteText)=>this.setState({noteText})}
         value={this.state.noteText}
         placeholder="type the new note here" 
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


    // console.log("add note is triigered");

    // if(this.state.noteText){
      var d  = new Date();
    var currDate = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
    let newNote1 = <Note note="key_from_main_is_Injected" noteDate="injected_prop" /> 
    let newNote2 = <Note note="note_2" noteDate="date_2" /> 
    arr = array(newNote1,newNote2);
    // this.state.noteArray.push(newNote1);
    // this.state.note

    // this.setState(noteArray:<Note note="key_from_main_is_Injected" noteDate="injected_prop" /> );

      // tempNote.props.noteDate =currDate;
    // console.log("tempNote date"+currDate);
    // console.log("tempNote date"+tempNote.props.date);

      // console.log("add note is triigered");
      // alert("add note is triigered");

      // this.state.noteArray.push({
      //   'date':d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()
      // });
    
      // this.setState({noteArray:this.state.noteText});
      // this.setState({noteText:''});
  // }
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
    fontSize:25,
    padding:70,
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
