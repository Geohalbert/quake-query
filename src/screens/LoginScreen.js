import React, {useState, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import InputField from '../components/InputField';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginText}>Welcome to Quake Query!</Text>
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
      <FormButton buttonTitle="Login" onPress={() => login(email, password)} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 24,
    marginBottom: 10,
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    color: '#6646ee',
    fontSize: 20,
  },
});
