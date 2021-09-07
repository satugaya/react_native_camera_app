/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Row } from 'react-native-table-component';
import realm, {TODOLIST_SCHEMA, deleteTodoList} from '../realm/databases/allSchemas';
import Swipeout from 'rc-swipeout';
import { readDir } from 'react-native-fs';

export default class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    var expense_details = realm.objects(TODOLIST_SCHEMA);
    this.state = {
      FlatListItems: expense_details
    }    
    
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };
  render() {

    var expense_details = realm.objects(TODOLIST_SCHEMA);
    this.state = {
      FlatListItems: expense_details
    }  
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
                      onPress:() => deleteTodoList(item.id)
                    }]}
                    
                    >
            <View style={styles.koko}>
              <Text style={styles.type}>{item.type}</Text>
              
              <Text style={styles.type}>Info: {item.additionalInfo}</Text>
              <Text style={styles.summa}>{item.expenseSum} €</Text>
              <Image
              style={styles.kuva}
              source={{uri: item.picture}
              }></Image>
              
              
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
    height: 150,
    flexDirection: "column",
    backgroundColor: "white",
    padding: 5,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderRadius: 5,
  },
  summa: {
    width: 200,
    padding: 5,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center',
  }, 
  type: {
    width: 180,
    padding: 5,
    backgroundColor: 'pink',
    borderRadius: 5,
    margin: 2,
  },
  kuva: {
    
    width: 140,
    height: 140,
    
    borderRadius: 5,
    
  }, 
});
