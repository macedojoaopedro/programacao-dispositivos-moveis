import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

function PlaylistScreen({ navigation }) {
  const playlists = [
    { id: '1', nome: 'Playlist 1', quantidade: '10 músicas' },
    { id: '2', nome: 'Playlist 2', quantidade: '5 músicas' },
    { id: '3', nome: 'Playlist 3', quantidade: '8 músicas' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.titulo}>🎼 {item.nome}</Text>
            <Text style={styles.subtitulo}>{item.quantidade}</Text>
          </TouchableOpacity>
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
  subtitulo: {
    fontSize: 14,
    color: '#666',
  },
});

export default PlaylistScreen;
