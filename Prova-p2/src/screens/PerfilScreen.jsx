import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, TextInput, HelperText, Text, Snackbar } from 'react-native-paper';
import { validateEmail, validatePassword, formatPhone } from '../utils/validators';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  

  const validate = () => {
    const newErrors = {};
    
    if (!name) newErrors.name = 'Nome é obrigatório';
    if (!email) newErrors.email = 'Email é obrigatório';
    else if (!validateEmail(email)) newErrors.email = 'Email inválido';
    if (!phone) newErrors.phone = 'Telefone é obrigatório';
    else if (phone.replace(/\D/g, '').length < 11) newErrors.phone = 'Telefone incompleto';
    if (!password) newErrors.password = 'Senha é obrigatória';
    else if (!validatePassword(password)) newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Senhas não coincidem';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      const userData = { name, email, phone, password };
      await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
      setVisibleSnackbar(true);
      navigation.navigate('UserData');
    }
  };

  const handlePhoneChange = (text) => {
    const formatted = formatPhone(text);
    setPhone(formatted);
  };
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text  variant="titleLarge" style={{margin: 5}} >Preencha seu cadastro para aproveitar o maximo do site!!!!!</Text>
      <TextInput
        label="Nome Completo"
        value={name}
        onChangeText={setName}
        error={!!errors.name}
        style={{ marginBottom: 8 }}
      />
      {errors.name && <HelperText type="error">{errors.name}</HelperText>}

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={!!errors.email}
        style={{ marginBottom: 8 }}
      />
      {errors.email && <HelperText type="error">{errors.email}</HelperText>}

      <TextInput
        label="Telefone"
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
        error={!!errors.phone}
        style={{ marginBottom: 8 }}
      />
      {errors.phone && <HelperText type="error">{errors.phone}</HelperText>}

      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={!!errors.password}
        style={{ marginBottom: 8 }}
      />
      {errors.password && <HelperText type="error">{errors.password}</HelperText>}

      <TextInput
        label="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        error={!!errors.confirmPassword}
        style={{ marginBottom: 16 }}
      />
      {errors.confirmPassword && <HelperText type="error">{errors.confirmPassword}</HelperText>}

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={{ marginTop: 16 }}
      >
        Cadastrar
      </Button>

      <Snackbar
        visible={visibleSnackbar}
        onDismiss={() => setVisibleSnackbar(false)}
        action={{
          label: 'OK',
          onPress: () => setVisibleSnackbar(false),
        }}
      >
        Cadastro realizado com sucesso!
      </Snackbar>
    </ScrollView>
  );
}