import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';


const AddItem = ({title, addItem}) => {
  const [text, setText] = useState(''); 

  const onChange = textValue => setText(textValue);
  
  return (
    <View>
      <TextInput 
      placeholder="Write a budget type..." 
      style={styles.input} 
      onChangeText={onChange}
     />
      <TouchableOpacity  onPress={() =>
      addItem(text)}>
        <Text style={styles.btnText}>
           Add an Item 
          </Text>
              
      </TouchableOpacity>
      <Text style={styles.tText}> 
        Budget types
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    backgroundColor: 'white',
  },
  
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    marginRight: 90,
    marginLeft: 90,
    marginBottom: 20,
    padding: 5,

  },
  tText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    
    
    padding: 5,

  }
});

export default AddItem;