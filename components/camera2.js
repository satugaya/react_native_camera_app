import 'react-native-gesture-handler';
import React from 'react';
import { Text, Button, SafeAreaView, StyleSheet, StatusBar, FlatList, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { ExpenseScreen } from '../screens/ExpenseScreen';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  

  render() {

    


    return (<View style={styles.item}>

      
  <Text style={{ fontSize: 20, padding: 15, marginRight: 80, borderRadius: 10, alignSelf: 'center', backgroundColor: "pink" }}
        onPress={() =>
          this.props.navigation.push('Expense', {
            navigation: this.props.navigation,
          })
        }>
        Add New Expense
  </Text>
  
  
  
  

    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export const App2 = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Expense"
          component={ExpenseScreen}
          options={{ 
            title: 'Expense'
          }}
        />
       
        
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App2
