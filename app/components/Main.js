import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';
import Note from './Note';
import { createStore } from 'redux';
import {NoteReducer} from '../reducers/noteReducer'
import {combineReducers}from 'redux';




function myReducer(state,action){
  console.log("reducer state:"+state);
  return state;
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
const store = createStore(myReducer,['state_init_at_store']);


export default class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      noteArray:[],
      noteText:'',
      newNote:'',
      myArray:[],
      allNotes:[]
    }

    this.countValue=0;
    // this.getKey=()=>this.getKey();
    this.uniqueIncrement=0;
    this.textInput="";

  }

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
    let myNotes;
    // let myNotes = store.getState().map( (text,index)=>{

    //   var d  = new Date();
    //   var currDate = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();

    //   var keyCount =this.getKey();

    //   return <Note note={text} key={index} keyVal={index} date={currDate} deleteMethod={()=>this.deleteMethod(keyCount)} />
    // });
  
  this.DisplayArray();

    console.log("session ended");
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>Noter</Text>
       </View>

       {myNotes}

       {/* <Note note="testura" date="2045/23/13" keyVal={"static_note_1"} deleteMethod={()=>this.deleteMethod("static_note_1")}/> */}
       {/* <Note note="Generational" date="2045/23/13" keyVal={"static_note_2"} deleteMethod={()=>this.deleteMethod("static_note_2")} />  */}

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

  DisplayArray(){
     console.log("<<<<<<<<<<<elements in array are>>>>>>>>>>>>>>>>>>");
      this.state.myArray.forEach( function(text){
      console.log(text);
    });
    console.log("<<<<<<<<<<< array completed >>>>>>>>>>>>>>>>>>");

  }

  deleteMethod(key){

    console.log("before deleting");
    this.state.myArray.forEach( function(text){
      console.log(">>>>>"+text);
    });
    
    var index = this.state.myArray.indexOf(key);//find the index of the key in array 
    this.state.myArray.splice(index,1);//remove 1 element form positio index
    this.setState({noteArray:this.state.myArray})
    
    console.log("after deleting!!!!!");
    this.state.myArray.forEach( function(text){
      console.log(">>>>>"+text);
    });

    console.log("!!!!!!!!!!!!!"+key+" deleted");



  }

  // let count=0;

  

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:-300,
  // position:'absolute'
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