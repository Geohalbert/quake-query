import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const {width} = Dimensions.get('window');
export default function InputField(props) {
  const {
    autoCapitalize,
    autoCorrect,
    error,
    errorMessage,
    helperText,
    isRequired,
    keyboardType,
    label,
    onChangeText,
    placeholderText,
    secureTextEntry,
    style,
    value,
    ...rest
  } = props;

  const [isFocused, onChangeFocus] = useState(false);

  let labelText = isRequired ? label + '*' : label;

  let stylesArr = [styles.input, style];

  if (isFocused) {
    stylesArr.push(styles.focused);
  }

  if (error) {
    stylesArr.push(styles.error);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        onBlur={() => onChangeFocus(false)}
        onChangeText={e => onChangeText(e.target.value)}
        onFocus={() => onChangeFocus(true)}
        placeholderText={placeholderText}
        secureTextEntry={secureTextEntry}
        style={stylesArr}
        value={value}
        {...rest}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
      <Text style={styles.errorMessage}>{(error && errorMessage) || ' '}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
  focused: {
    borderColor: '#00f',
  },
  helperText: {
    fontSize: 12,
  },
  input: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 6,
    borderWidth: 1,
    color: '#000',
    height: 40,
    justifyContent: 'center',
    marginBottom: 2.5,
    padding: 10,
    width: width / 1.25,
  },
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    fontWeight: '400',
  },
});
