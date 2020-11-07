import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function FormButton(props) {
  const {buttonTitle, ...rest} = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#a0522d',
    borderRadius: 8,
    height: height / 10,
    justifyContent: 'center',
    padding: 10,
    width: width / 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});
