/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button, View, Alert} from 'react-native';
import axios from 'axios';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import CounterApp from './src/CounterApp';
import  {createSotre, createStore} from 'redux'
import  {Provider} from'react-redux' 
// import { action } from 'mobx';

const  initialState = {
  counter:0,
  nama:''

  
}

const  alert_show = ()=>{
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )

}


// merubah state  hanya bisa dilakukan  di reducder 
// reducer hanya melakukan perubahaan   jka terdapat action dari dispacth
const  reducer  = (state=initialState, action) =>{
  switch(action.type){
    case 'INCREASE_COUNTER':
    // staete.conuter artinya  initialstaed = state didalam initialstate terdapat counter , jadi mengabil 
      // nilai counter  

    return { counter:state.counter+1}
    case 'DECREASE_COUNTER':
    return {counter:state.counter-1}
    case 'SIMPAN_NAMA':
    return {nama:action.nama_saya, counter:state.counter}

    case 'SHOW_ALERT':
    // memeanggil fungsi dari luar 
    alert_show();
 
    
  }
 return state
}
// store akan menyimpan  hasil dari reducer 
const  store  =createStore(reducer)

export default class App extends Component {
  
  




  render() {
    return (
      // menggunakan provider, melempar  store  ke CounterApp
      <Provider store={store}> 
     <CounterApp />
     </Provider>
    );
  }
}


 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
