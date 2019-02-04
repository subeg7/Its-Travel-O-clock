import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';


export default class Note extends React.Component {
  render() {
    return (
     <View key={this.props.keyVal} style={styles.note} >
       <Text style={styles.noteText}>{this.props.note}</Text>
       {/* <Text style={styles.noteText}>created on :{this.props.date}</Text> */}
       <Text style={styles.noteText}>key:{this.props.keyVal}</Text>

       <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
         <Text style={styles.noteDeleteText}>D</Text>
       </TouchableOpacity>

       <View style={{padding: 30}}>
    {/* <TextInput placeholder="default" onSubmitEditing={this.func}/> */}
 </View>


     </View>
    );
  }


  func(){
    console.log("func is called");
  }
  // deleteMethod(){

  // }
}

const styles = StyleSheet.create({  

  note:{
    position:'relative',
    // align:'center',
    paddingLeft:20,
    paddingRight:20,
    paddingRight:20,
    paddingRight:100,
    borderWidth:5,
    borderColor:"#a4b942",
    marginBottom:10,
    width:300,
    height:80,
    backgroundColor:"#a4b942"

  },
  noteDelete: {
    // position:'absolute',
    // flex:2,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: 'red',
    // posit
   
  },
  
  noteText: {
    paddingLeft:20,
    borderLeftWidth:10,
    borderLeftColor:"#f4b942",
    backgroundColor:"#f4b942",
    color:'blue',
    height:30,
    width:200,
    // flex:1,
    // fontSize:20
  },
  noteDeleteText:{
    color:'white',
    backgroundColor:'red'
  }
});
