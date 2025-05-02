import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

function MusicScreen({ navigation }) {
  const [curtidas, setCurtidas] = useState({});

  const musicas = [
    { id: '1', nome: 'Música 1', artista: 'Artista 1' },
    { id: '2', nome: 'Música 2', artista: 'Artista 2' },
    { id: '3', nome: 'Música 3', artista: 'Artista 3' },
    { id: '4', nome: 'Música 4', artista: 'Artista 4' },
  ];

  const toggleCurtir = (id) => {
    setCurtidas((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const tocarMusica = (nome) => {
    Alert.alert('Tocando agora', nome);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.titulo}>🎵 {item.nome}</Text>
              <Text style={styles.artista}>{item.artista}</Text>
            </View>
            <View style={styles.botoes}>
              <TouchableOpacity onPress={() => tocarMusica(item.nome)} style={styles.botao}>
                <Text style={styles.acao}>▶️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleCurtir(item.id)} style={styles.botao}>
                <Text style={styles.acao}>
                  {curtidas[item.id] ? '❤️' : '🤍'}
                </Text>
              </TouchableOpacity>
            </View>
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
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artista: {
    fontSize: 14,
    color: '#666',
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botao: {
    marginLeft: 12,
  },
  acao: {
    fontSize: 20,
  },
});

export default MusicScreen;
