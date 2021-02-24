import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './fb';
import insta from './insta';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>

      <Appcontainer/>
    </View>
  );
  }
}

var TabContainer = createBottomTabNavigator({
  fb : {screen: fb},
  insta:{screen: insta}
})
const Appcontainer = createAppContainer(TabContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
