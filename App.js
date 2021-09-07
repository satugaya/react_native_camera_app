import React, {useState}  from 'react';
import { Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values'

import TabFooter from './components/TabFooter';


// You can import from local files


import Header from './components/header';
import { checkPropTypes } from 'prop-types';

// or any pure javascript modules available in npm


export default function App() {
  //<ExpenseComponent />
  //    <FlashMessage position="bottom" />
  return (
    <View style={styles.container}>
      
      <Header />
      
      
      <TabFooter style={styles.footer}/>
      

      
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: -5,
  
    paddingBottom: checkPropTypes.isAndroid ?  14 : 0
  }
      
    
    
    
  
 
  });
