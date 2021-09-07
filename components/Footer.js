import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import  {FooterNavigation } from './FooterNavigation';

export default function Footer() {
    //<ExpenseComponent />
    //    <FlashMessage position="bottom" />
    return (
      <View style={styles.footer}>
        
        <FooterNavigation />
    
      </View>
    );
  }

const styles = StyleSheet.create({
  footer: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    fontSize: 25
    
  }
});

