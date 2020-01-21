/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export class App extends Component {
  state = {
    screenWith: undefined,
    click: 0,
  };
  _handleLayout = ({nativeEvent}) => {
    const screenWith = Dimensions.get('screen').width;
    this.setState({screenWith});
  };

  render() {
    const {screenWith} = this.state;
    return (
      <View
        onLayout={this._handleLayout}
        style={[
          styles.container,
          screenWith <= 768 ? {padding: 40} : {padding: 100},
        ]}>
        <View style={styles.card}>
          <Text
            style={[
              styles.font,
              screenWith <= 768 ? {fontSize: 16} : {fontSize: 24},
            ]}>
            Hello React-Native-Web
          </Text>
          <Text style={[styles.font, {fontSize: 18, textAlign: 'center'}]}>
            <Text style={[screenWith <= 768 ? {fontSize: 20} : {fontSize: 50}, { marginBottom: 10}]}>
              {this.state.click}
            </Text>
            {'\nTimes Clicked'}
          </Text>
          <View style={styles.actionView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({click: this.state.click + 1})}>
              <Text style={styles.font}> Click </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  card: {
    backgroundColor: '#15202b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  font: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  actionView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#71c9f8',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    paddingVertical: 20,
  },
});

export default App;
