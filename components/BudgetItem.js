import React, {useState}  from 'react';
import { TextInput } from 'react-native';
import { Text, Button, TouchableOpacity, View, StyleSheet, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values'

import AddItem from './AddItem';
import realm, {TODO_SCHEMA, deleteTodo, updateTodo} from '../realm/databases/allSchemas';
import BudgetItemList from './BudgetItemList';
import Swipeout from 'rc-swipeout';


export default function BudgetItem() {
  const [items, setItems] = useState([ 
    { text: ''},
  ]);
  
  const deleteItem = text => {
    setItems(prevItems => {
      return prevItems.filter(item => item.text != text);
    });
  };

  const addItem = text => {
    if (!text) {
        Alert.alert('Error', 'Please enter an item', {text:
           'Ok'});
    } else {
      setItems(prevItems => {
        realm.write(() => {
          var ID =
        realm.objects(TODO_SCHEMA).sorted('id', true).length > 0
          ? realm.objects(TODO_SCHEMA).sorted('id', true)[0]
              .id + 1
          : 1;
          realm.create(TODO_SCHEMA, {
            id: ID, 
            name: text,
            
          } );
          
        });
      return [{ text}, ...prevItems];
      
    });
  }
  };
  return (
    <View style={styles.container}>
      
      <AddItem addItem={addItem}/>
      
        <BudgetItemList />
    

      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
 
});
