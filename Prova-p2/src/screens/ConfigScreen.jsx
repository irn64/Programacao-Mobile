import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Snackbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserDataScreen() {
  const [user, setUser] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const saved = await AsyncStorage.getItem('@user_data');
      if (saved) setUser(JSON.parse(saved));
    };
    loadUser();
  }, []);

  const handleSave = async () => {
    await AsyncStorage.setItem('@user_data', JSON.stringify(user));
    setSnackbarVisible(true);
  };

  const handleDelete = async () => {
    await AsyncStorage.removeItem('@user_data');
    setUser(null);
  };

  if (!user) return <Text style={{ padding: 16 }}>Nenhum dado encontrado.</Text>;

  return (
    <View style={{ padding: 16 }}>
      <TextInput label="Nome" value={user.name} onChangeText={(text) => setUser({ ...user, name: text })} />
      <TextInput label="Email" value={user.email} onChangeText={(text) => setUser({ ...user, email: text })} />
      <TextInput label="Telefone" value={user.phone} onChangeText={(text) => setUser({ ...user, phone: text })} />
      <TextInput label="Senha" secureTextEntry value={user.password} onChangeText={(text) => setUser({ ...user, password: text })} />

      <Button mode="contained" onPress={handleSave} style={{ marginTop: 16 }}>
        Salvar Alterações
      </Button>
      <Button mode="outlined" onPress={handleDelete} style={{ marginTop: 8 }}>
        Excluir Cadastro
      </Button>

      <Snackbar visible={snackbarVisible} onDismiss={() => setSnackbarVisible(false)}>Dados atualizados!</Snackbar>
    </View>
  );
}
