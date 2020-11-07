import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import InputField from '../components/InputField';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <InputField
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        placeholderText="Email"
        value={email}
      />
      <InputField
        onChangeText={text => setPassword(text)}
        placeholderText="Password"
        secureTextEntry={true}
        value={password}
      />
      <FormButton
        buttonTitle="Signup"
        onPress={() => register(email, password)}
      />
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
