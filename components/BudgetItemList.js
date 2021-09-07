/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import realm, {TODO_SCHEMA, deleteTodo} from '../realm/databases/allSchemas';

import Swipeout from 'rc-swipeout';



export default class BudgetItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    
    
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };
  render() {
    var expense_types = realm.objects(TODO_SCHEMA);
    this.state = {
      FlatListItems: expense_types,
    };
    
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            
            <Swipeout
                    
                    right={[{
                      text: 'delete',
                      backgroundColor: `#ff8c00`,
                      onPress:() => deleteTodo(item.id)}]}
                    
                    >
                      <View style={styles.koko}>
                 <Text style={styles.type}>{item.name}</Text>

                 </View>
                 </Swipeout>
          )}
        />
                   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  koko: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderRadius: 5,
  },

  type: {
    width: 180,
    padding: 5,
    
    borderRadius: 5,
    margin: 2,
  },
});
