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
      newNote:'',
      myArray:[]
    }

    this.countValue=0;
  }
  render() {
    
    // let notes = this.state.noteArray.map( (val,key)=>{
    //   return <Note key={key} keyval={key} val={val}
    //     deleteMethod={()=>this.deleteNote(key)}/>
    // });

    // let notes = this.state.noteArray.map( (x) =>"this is amazing");

    let myNotes = this.state.myArray.map( (x)=>{
      var d  = new Date();
    var currDate = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
        return <Note note={x} keyVal={++this.countValue} date={currDate} deleteMethod={this.deleteMethod} />
        // console.log("value of x:"+x);
    });

    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>Noter</Text>
       </View>

       {/* <ScrollView style={styles.scrollContainer}> */}
       {myNotes}
       {/* </ScrollView> */}

       {/* <Note note="static element added" date="2045/23/13" keyVal={++this.countValue}/> */}
        <Note note="testura" date="2045/23/13" deleteMethod={this.deleteMethod}/>
      {/* <Note note="amellulua" date="2045/23/13"/>  */}
       <Note note="Generational" date="2045/23/13" deleteMethod={this.deleteMethod}/> 
         {/* <Text style={styles.noteText}>{this.state.myArray}</Text>  */}
         {/* {this.state.noteArray} */}
       {/* </ScrollView > */}

       <View style={styles.footer}>
         <TextInput style={styles.textInput} 
         onChangeText={(noteText)=>this.setState({noteText})}
         value={this.state.noteText}
         placeholder="type the new note here" 
         placeholderTextColor="green">
         </TextInput>
       </View>

       {/* <Text>{this.state.noteText}</Text> */}

       <TouchableOpacity 
       onPress={this.addNote.bind(this)}
       style={styles.buttonText}>
        <Text style={styles.addButton}>+</Text>
       </TouchableOpacity>
      </View>
    );
  }

  deleteMethod(){
    console.log("deletion triggered");
  }

  // let count=0;

  addNote(){
    if(this.state.noteText){

    // this.state.myArray.push("pushed item");
    arr=this.state.myArray;
    arr.push(this.state.noteText);
    
    // this.state.myArray=arr;
    this.setState({myArray:arr});
    this.setState({noteText:''});


    // console.log("add note is triigered");

    var d  = new Date();
    var currDate = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
    // let newNote1 = <Note note="key_from_main_is_Injected" noteDate="injected_prop" /> 
    // let newNote2 = <Note note="note_2" noteDate="date_2" /> 
    // arr = array(newNote1,newNote2);
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

      // console.log("printing the notearray"+this.state.noteArray.toString());
      // this.state.noteArray.toString();

      // console.log("noteArray__>"+this.state.noteArray[0]);
    
      // this.setState({noteText:''});
  }
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-600,
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
