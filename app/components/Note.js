import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';


export default class Note extends React.Component {
  render() {
    return (
     <View key={this.props.keyval} style={styles.notes}>
       <Text style={styles.noteText}>{this.props.val.date}</Text>
       <Text style={styles.noteText}>{this.props.val.note}</Text>

       <TouchOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
         <Text style={this.styles.noteDeleteText}>Delete</Text>
       </TouchOpacity>
     </View>
    );
  }
}
