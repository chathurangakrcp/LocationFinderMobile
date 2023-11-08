import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LocationFinder from './src/screens/locationFinder/LocationFinder';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LocationFinder />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
  },
});
