import 'react-native-gesture-handler';
import React from 'react';
import { Text, SafeAreaView, StyleSheet, StatusBar, FlatList, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BudgetScreen } from '../screens/BudgetScreen';
import { StatsScreen } from '../screens/StatsScreen';
import { TabView, SceneMap } from 'react-native-tab-view';


export class FooterNavigation extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (<View style={styles.item}>

  <TabView>
    <Text style={{ fontSize: 20, padding: 5 }}
          onPress={() =>
            this.props.navigation.push('Stats', {
              navigation: this.props.navigation,
            })
          }>
          Stats
    </Text>
  </TabView>    
  <TabView>
  <Text style={{ fontSize: 20, padding: 5 }}
        onPress={() =>
          this.props.navigation.push('BudgetItems', {
            navigation: this.props.navigation,
          })
        }>
        BudgetItems
  </Text>
    </TabView> 
      

    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
  },
});


export const FooterNav = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{ title: 'Stats' }}
        />
        <Stack.Screen
          name="BudgetItems"
          component={BudgetScreen}
          options={{ title: 'BudgetItems' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FooterNav;
