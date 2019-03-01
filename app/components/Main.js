import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';

import Note from './Note';
import { createStore } from 'redux';
import {NoteReducer} from '../reducers/noteReducer'
import {combineReducers}from 'redux';


const initialState = {
  note_text:"the initial text",
  text_array: []
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

let note_count=0;


function myReducer(state = initialState,action){
  console.log("reducer state:"+state.text_array);
  return Object.assign({}, state, {
    text_array:state.text_array.concat(["reducer changed the state "+ ++note_count+" times"])
  })
  // return state.note_text;
  switch(action.type) {
    case 'add_note' : {
      console.log("Reducer state:>"+state);
      // return state.concat([action.note]);
      return state;
    }
    case 'delete_note' : {
      console.log("Reducer is trying to delete");
      return state;
    }
    default :{ return state;
    }
  }

}


// addNote(){
//   // if(this.state.noteText){
//   // console.log("adding note");

//   // this.state.myArray.push("pushed item");
//   // this.state.noteText="This is note Number:"+this.countValue++
//   tempText="This is note Number:"+this.countValue++
//   arr=this.state.myArray;
//   arr.push(tempText);
  
//   // this.state.myArray=arr;
//   this.setState({myArray:arr});
//   // this.setState({noteText:''});
//   console.log("note added");



// // }
// }


// const store = createStore(combineReducers({noteR:NoteReducer}));
const store = createStore(myReducer,initialState);


export default class Main extends React.Component {

  // constructor(props){
  //   super(props);
  //   // this.state={
  //   //   noteArray:[],
  //   //   noteText:'',
  //   //   newNote:'',
  //   //   myArray:[],
  //   //   allNotes:[]
  //   // }

  //   this.countValue=0;
  //   // this.getKey=()=>this.getKey();
  //   this.uniqueIncrement=0;
  //   this.textInput="";

  // }

  getKey(){
    return ++this.uniqueIncrement;
  }


  
  render() {
    store.dispatch({
      type:'add_note',
      note:'this note is amazing'
    });
    console.log("current_state:"+store.getState());
    console.log("...............................................render session started.................");
    // this.displayA
    // let myNotes;
    // let myNotes = store.getState().map( (text,index)=>{

    //   var d  = new Date();
    //   var currDate = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();

    //   var keyCount =this.getKey();

    //   return <Note note={text} key={index} keyVal={index} date={currDate} deleteMethod={()=>this.deleteMethod(keyCount)} />
    // });
  
  // this.DisplayArray();

    console.log("!!!!!!!!!!!!!!!!!!!session ended!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>Noter</Text>
       </View>

       {/* {myNotes} */}

       <Note note="testura" date="2045/23/13" keyVal={"static_note_1"} deleteMethod={()=>this.deleteMethod("static_note_1")}/>
       <Note note="Generational" date="2045/23/13" keyVal={"static_note_2"} deleteMethod={()=>this.deleteMethod("static_note_2")} /> 

       <View style={styles.footer}>
         {/* <TextInput style={styles.textInput} 
         onChangeText={(noteText)=>{
           this.textInput+= noteText;
           console.log(textInput);
         }}
         value={this.textInput}
         placeholder="type the new note here" 
         placeholderTextColor="green">
         </TextInput>  */}
       </View>

       {/* <Text>{this.state.noteText}</Text> */}

       <TouchableOpacity 
    // store.dispatch(addAction);
       onPress={()=>store.dispatch({
         type:'add_note',
         note:'this note is amazing'
       })}
       style={styles.buttonText}>
        <Text style={styles.addButton}>+</Text>
       </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    width: '100%',
     height: '100%',
     justifyContent: 'center',
     alignItems: 'center'

  }

});
