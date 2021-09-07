import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { updateTodoList, deleteTodoList,queryAllTodoLists } from '../realm/databases/allSchemas';
import realm from '../realm/databases/allSchemas';

export default class ExpenseListComponent extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            todoLists: []
        };
        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }
    reloadData = () => {
        queryAllTodoLists().then((todoLists) => {
            this.setState({ todoLists });
        }).catch((error) => {
            this.setState({ todoLists: [] });
        });
        
    }
    render() {
        return (<View>
            
            <FlatList
                style={styles.flatList}
                data={this.state.todoLists}
                renderItem={({ item, index }) => <FlatListItem {...item} itemIndex={index}
                    
                    onPressItem={() => {
                        alert(`You pressed item `);
                    }} />}
                keyExtractor={item => item.id}
            />
            
        </View>);
    }
}