
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Navigator from './navigator';
import Home from './components/home';
import { MenuContext } from 'react-native-popup-menu';


export default class App extends Component {
  render() {
    return (
      <MenuContext>
        <Navigator />
      </MenuContext>
    );
  }
}

