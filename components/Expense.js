import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet, TouchableWithoutFeedback, Keyboard,
  Button
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import moment from "moment";

import { createStackNavigator } from '@react-navigation/stack';

import realm, {TODOLIST_SCHEMA, TODO_SCHEMA} from '../realm/databases/allSchemas';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-crop-picker';




const currentDate = new Date();
let etypes = realm.objects(TODO_SCHEMA);

export class ExpenseComponent extends Component {
    constructor(props) {
    super(props);

    
    
    this.state = {
      expense_types: etypes,
      type: "",
      expenseDate: currentDate,
      additionalInfo: "",
      expenseSum: "",
      expenseImg: "",
      picture: ""
    };
  }

  


  handleDate = (date) => {
    
    this.setState({ expenseDate: date });
  };
  handleAdditionalInfo = (text) => {
    
    this.setState({ additionalInfo: text });
  };
  handleSum = (text) => {
    
    this.setState({ expenseSum: text });
  };

  

  pickerChange(index) {
    this.state.expense_types.map ( (v, i)=> {
      if ( index === i) {
        this.setState({
          type: this.state.expense_types[index].name,
          
        })
      }
    })
 
}
 
  render() {

    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date_other = moment(today).toDate();
    const date = moment(today).format("DD-MM-YYYY");
    const Stack = createStackNavigator();

    

    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        this.setState({ picture: image.path })
        
      });
    }
    const takePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        this.setState({ picture: image.path })
        
      });
    }
    
    
    
    

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Add new expense</Text>
        
        
        <Picker 
          selectedValue={this.state.type}
          onValueChange={(itemValue, itemIndex) =>
          this.pickerChange(itemIndex)}>{
            this.state.expense_types.map( (v) => {
              return <Picker.Item label={v.name} value={v.name} key={v.id} />
            })
          }
        </Picker>
        
        <DatePicker
          style={styles.datePickerStyle}
          date={date_other} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2100"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={this.handleDate}
        />
        

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Additional Info"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleAdditionalInfo}
        />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          underlineColorAndroid="transparent"
          placeholder="Sum *"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText=  {this.handleSum}
        />
        <TouchableOpacity 
        style={styles.photoButton} 
        onPress={takePhotoFromCamera}>
        <Text style={styles.photoText}>
           Take photo!
          </Text>
              
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.photoButton} 
        onPress={takePhotoFromLibrary}>
        <Text style={styles.photoText}>
        Choose Photo from Library
          </Text>
              
      </TouchableOpacity>
        
        
        
          
        

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => 
            {
            
              const newExpense = {
                
                type: this.state.type,
                expenseDate: this.state.expenseDate,
                additionalInfo: this.state.additionalInfo,
                expenseSum: this.state.expenseSum,
                picture: this.state.picture
              };
              
              realm.write(() => {
                var ID =
              realm.objects(TODOLIST_SCHEMA).sorted('id', true).length > 0
                ? realm.objects(TODOLIST_SCHEMA).sorted('id', true)[0]
                    .id + 1
                : 1;
                realm.create(TODOLIST_SCHEMA, {
                  id: ID, 
                  type: this.state.type,
                  expenseDate: (this.state.expenseDate).toString(),
                  additionalInfo: this.state.additionalInfo,
                  expenseSum: this.state.expenseSum,
                  picture: this.state.picture
                } );
                
              })
              
          }}
        >
          <Text style={styles.submitButtonText}> Save </Text>
        </TouchableOpacity>

        
        
        
      </View>
      </TouchableWithoutFeedback>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
submitButton: {
  color: 'darkslateblue',
  fontSize: 20,
  textAlign: 'center',
  backgroundColor: 'darkslateblue',
  borderRadius: 10,
  marginRight: 80,
  marginLeft: 80,
  marginBottom: 10,
  padding: 5,
  },  
  header: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },

  photoButton: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    marginRight: 80,
    marginLeft: 80,
    marginBottom: 10,
    padding: 5,
  }, 
  photoText: {
    color: 'darkslateblue',
    fontSize: 14,
    textAlign: 'center',
    
    padding: 5,
  }, 


  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  
});
