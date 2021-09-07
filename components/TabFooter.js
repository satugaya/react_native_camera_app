import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Stats from './Stats';
import BudgetItem from './BudgetItem';
import App2 from './camera2';


const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
      <App2 />
   
   </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} >
      <Stats />
      
      
      </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#00FFFF' }]} >
    <BudgetItem />
    </View>
  );
const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabFooter() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'List' },
    { key: 'second', title: 'Stats' },
    { key: 'third', title: 'BudgetItems' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition= 'bottom'
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    
      
      
    
  },
  scene: {
    flex: 1,
  },
});
