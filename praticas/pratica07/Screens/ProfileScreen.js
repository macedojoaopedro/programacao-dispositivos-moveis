import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profileImage} />
        <Text style={styles.nome}>João da Silva</Text>
        <Text style={styles.email}>joao.silva@email.com.br</Text>
        <Text style={styles.telefone}>(61) 99999-9999</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    width: '100%',
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 50,
    marginBottom: 20,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  telefone: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
