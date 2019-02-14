import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';
import Footer from './Footer'
import Todo from './Todo'



export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>


        <Text>Redux on fire </Text>
        <Text>Redux on fire </Text>
        
        
        
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
