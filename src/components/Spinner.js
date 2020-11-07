import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Spinner() {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#6646ee" />
    </View>
  );
}
const styles = StyleSheet.create({
  spinnerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
