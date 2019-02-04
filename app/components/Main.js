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
    
    let myNotes = this.state.myArray.map( (x)=>{
      var keyCount = "dynamic_note_"+ ++this.countValue;
      var d  = new Date();
    var currDate = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();
        return <Note   note={x} keyVal={keyCount} date={currDate} deleteMethod={this.deleteMethod(keyCount)} />
        // console.log("value of x:"+x);
    });

    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerText}>Noter</Text>
       </View>

       {myNotes}

       {/* <Note note="static element added" date="2045/23/13" keyVal={++this.countValue}/> */}
        <Note note="testura" date="2045/23/13" keyVal={++this.countValue} deleteMethod={()=>this.deleteMethod("static_note_2")}/>
      {/* <Note note="amellulua" date="2045/23/13"/>  */}
       <Note note="Generational" date="2045/23/13" keyVal={++this.countValue} deleteMethod={()=>this.deleteMethod("static_note_1")} /> 
         {/* <Text style={styles.noteText}>{this.state.myArray}</Text>  */}
         {/* {this.state.noteArray} */}
       {/* </ScrollView > */}

       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({noteText:text})}
        value={this.state.text}
      />
       
      

       <TouchableOpacity 
       onPress={this.addNote}
       style={styles.buttonText}>
        <Text style={styles.addButton}>+</Text>
       </TouchableOpacity>
      </View>
    );
  }

  deleteMethod(key){
    console.log("deletion triggered by!!!!"+key);
  }


  addNote(){
    if(this.state.noteText){
      //if something is typed
      arr=this.state.myArray;
      arr.push(this.state.noteText);
      
      this.setState({myArray:arr});
      this.setState({noteText:''});
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
