import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './Home';
import MapView from 'react-native-maps';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
      <MapView
          style={styles.maps}
          initialRegion={{
            latitude: 41.50498,
            longitude: -87.80037,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height-500,
  },
});

export default withAuthenticator(App);