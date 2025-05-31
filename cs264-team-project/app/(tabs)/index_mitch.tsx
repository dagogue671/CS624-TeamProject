import { View, Text, FlatList, Button, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useItems } from '../context/ItemContext';

export default function HomeScreen() {
  const { items, deleteItem } = useItems();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({ pathname: '/item', params: item })}>
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Button title="edit" onPress={() => router.push({ pathname: '/edit', params: item })} />
              <Button title="delete" onPress={() => deleteItem(item.id)} color="red" />
            </View>
          </Pressable>
        )}
      />
      <Pressable onPress={() => router.push('/add')} style={styles.addButton}>
        <Text style={styles.addText}>+ Add Item</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: '#eee', padding: 10, marginBottom: 10, borderRadius: 6 },
  name: { fontSize: 18, fontWeight: 'bold' },
  addButton: { marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  addText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

