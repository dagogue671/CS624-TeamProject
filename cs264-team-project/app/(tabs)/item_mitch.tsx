import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

const API_KEY = '28d4a629da6c421c9adbf2b3fe64e023';    //Important cyberecurity note: never directly upload API keys directly to a code repo 

export default function ItemCard() {
  const { name } = useLocalSearchParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    const fetchGame = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(name as string)}`
        );
        const json = await res.json();
        const firstMatch = json.results[0];
        setGame(firstMatch);
      } catch (err) {
        console.error('Error fetching game:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [name]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  if (!game) return <Text style={styles.error}>Game not found.</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{game.name}</Text>
      {game.background_image && (
        <Image source={{ uri: game.background_image }} style={styles.image} />
      )}
      <Text style={styles.label}>Rating: {game.rating} / 5</Text>
      <Text style={styles.label}>Released: {game.released}</Text>
      <Text style={styles.label}>Genres: {game.genres?.map((g: any) => g.name).join(', ')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  error: { fontSize: 18, color: 'red', marginTop: 40, textAlign: 'center' },
});

