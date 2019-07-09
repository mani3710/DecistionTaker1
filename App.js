import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from './Navigations/index';

export default function App() {
  return (
   <RootNav/>
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
