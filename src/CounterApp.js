/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button, View, TextInput} from 'react-native';
import axios from 'axios';
import {createStore} from 'redux'
import  {connect} from 'react-redux'
import {Provider} from 'react-redux'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




 class CounterApp extends Component {
  constructor(props){
      super(props);
      this.state={nama_saya:''};
  } 
 
// set nama akan mekakna penyimpanan dari state ke simpan_nama
set_nama(){
    this.props.simpan_nama(this.state.nama_saya)
  
}

 
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.welcome}>Simple  Redux by Robbie!</Text>
        <Button onPress={()=>this.props.increaseCounter()} title="Increases" />
        <Text style={styles.instructions}>{this.props.counter}</Text>
        <Button onPress={()=>this.props.decreaseCounter()} title="Decreases" />

        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput placeholder="masukan Nama anda" onChangeText={(text)=>this.setState({nama_saya:text})} />
       {/* button jika di klik akan menjalanak set_nama  */}
       <Button onPress={this.set_nama.bind(this)} title="Simpan Nama" />
        <Text  style={styles.instructions}>Nama anda adalah :{this.props.nama}</Text>
        <Button onPress={()=>this.props.shwo_alert()} title="Show Alert" />
        
       
      </View>
      
    );
  }
}

simpan_nama1 = (nama_saya) => {
    return {
        type: 'SIMPAN_NAMA',
        nama_saya:nama_saya

    };
  };
 
function mapStateToProps(state){
    return{
      counter:state.counter,
      nama:state.nama
    
    }
  }
// merubah  state mejadi response 
  function mapDispacthToPorps(dispatch){
      return{
          increaseCounter : () => dispatch({type: 'INCREASE_COUNTER'}),
          decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'}),
        //   simpan_nama : (nama_saya) => dispatch({type: 'SIMPAN_NAMA', nama_saya:this.state.nama_saya}),
      
        shwo_alert :() => dispatch({type:'SHOW_ALERT'}),
        simpan_nama : (nama_saya) => dispatch(simpan_nama1(nama_saya)),

      }
  }
  export default connect(mapStateToProps, mapDispacthToPorps)(CounterApp)

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
