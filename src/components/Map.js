import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

export default class Map extends Component<{}> {
  render() {
    return (
        <View style ={styles.container}>
          <MapView
            style={styles.map}
            region={region}
          >
          <MapView.Marker coordinate={region} pincolor="#333565"/>
          </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
const region={
  latitude: 12.9715987,
  longitude: 77.5945627,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
}
