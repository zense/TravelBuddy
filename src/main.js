import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import Map from './components/Map';


export default class main extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.topCont}><Text>XYZM</Text></View>
      <View style= {styles.mapCont}><Map/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:
    {
      flex:1
    },
    topCont:
    {
      flex:5,
      flexDirection: 'column',
      alignItems: 'center',
      margin:2
    },
    mapCont:
    {
      flex:95
    }
});
