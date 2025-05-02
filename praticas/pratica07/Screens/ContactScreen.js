import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ContactsScreen({ navigation }) {
  const contatos = [
    { id: '1', nome: 'Nome do Contato 1', numero: '(99) 99999-9999' },
    { id: '2', nome: 'Nome do Contato 2', numero: '(99) 99999-9999' },
    { id: '3', nome: 'Nome do Contato 3', numero: '(99) 99999-9999' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>👤 {item.nome}</Text>
            <Text style={styles.numero}>{item.numero}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 14,
    color: '#666',
  },
});

export default ContactsScreen;
