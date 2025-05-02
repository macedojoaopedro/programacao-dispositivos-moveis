import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ChatScreen({ navigation }) {
  const mensagens = [
    { id: '1', nome: 'Ana Souza', horario: '08:45', mensagem: 'Oi, tudo bem?' },
    { id: '2', nome: 'Carlos Lima', horario: '09:30', mensagem: 'Vamos marcar aquela reunião?' },
    { id: '3', nome: 'Mariana Santos', horario: '10:10', mensagem: 'Enviei o arquivo para vc.' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.horario}>{item.horario}</Text>
            <Text style={styles.mensagem}>{item.mensagem}</Text>
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
  horario: {
    fontSize: 14,
    color: '#666',
  },
  mensagem: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default ChatScreen;
