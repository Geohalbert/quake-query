import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FormButton from '../components/FormButton';
import InputField from '../components/InputField';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <InputField
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={e => setEmail(e.target.value)}
        placeholderText="Email"
        value={email}
      />
      <InputField
        onChangeText={e => setPassword(e.target.value)}
        placeholderText="Password"
        secureTextEntry={true}
        value={password}
      />
      <FormButton buttonTitle="Signup" onPress={() => alert('sign button')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});
