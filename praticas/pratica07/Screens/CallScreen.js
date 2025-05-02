import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function CallScreen({ navigation }) {
  const chamadas = [
    { id: '1', nome: 'Campos Sales', data: '28/02/2024 12:03' },
    { id: '2', nome: 'Rui Barbosa', data: '04/12/2023 21:10' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={chamadas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.info}>
              <Text style={styles.nome}>👤 {item.nome}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
            <Text style={styles.icone}>📞</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 14,
    color: '#666',
  },
  icone: {
    fontSize: 24,
  },
});

export default CallScreen;
