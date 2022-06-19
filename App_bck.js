import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';
import AWSCONFIG from './src/aws-exports.js';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';

Amplify.configure({
   ...AWSCONFIG,
   Analytics: { 
       disabled: true
   }
});

function App() {
  return (
/*    <View style={styles.container}>
      <Text>You are in Geo Module 123!</Text>
      <StatusBar style="auto" />
    </View> 
*/    
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default withAuthenticator(App, false);