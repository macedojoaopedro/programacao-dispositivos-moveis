import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function FavoritesScreen({ navigation }) {
  const favoritas = [
    { id: '1', nome: 'Música Favorita 1', artista: 'Artista 1' },
    { id: '2', nome: 'Música Favorita 2', artista: 'Artista 2' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>🎵 {item.nome}</Text>
            <Text style={styles.artista}>{item.artista}</Text>
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
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artista: {
    fontSize: 14,
    color: '#666',
  },
});

export default FavoritesScreen;
