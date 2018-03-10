import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

	Main() {
		Actions.main()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<View style={styles.buttonCont}>
					<TouchableOpacity onPress={this.signup}><Image source={require('../images/googleButton.png')} style={{width: 300, height: 60}}/></TouchableOpacity>
				</View>
        <View style={styles.buttonCont}>
					<TouchableOpacity onPress={this.Main}><Text style={styles.button}> Continue anyway</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#ffffff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  buttonCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:10,
    flexDirection:'row'
  },
  button: {
    borderRadius:100,
    backgroundColor:'rgba(255,255,255,0.6)',
    color:'rgba(255,0,0,0.6)',
  	fontSize:20,
  	fontWeight:'500'
  }
});
