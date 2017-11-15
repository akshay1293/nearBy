
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
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MenuContext>
          <Navigator />
        </MenuContext>
      </Provider>
    );
  }
}

