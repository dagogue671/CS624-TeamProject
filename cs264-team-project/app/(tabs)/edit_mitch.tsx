import { useLocalSearchParams, useRouter } from 'expo-router';
import { useItems } from '../context/ItemContext';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function EditItem() {
  const { id, name: initialName, description: initialDescription } = useLocalSearchParams();
  const [name, setName] = useState(initialName as string);
  const [description, setDescription] = useState(initialDescription as string);
  const { updateItem } = useItems();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <TextInput value={description} onChangeText={setDescription} style={styles.input} />
      <Button title="Update" onPress={() => {
        updateItem(id as string, name, description);
        router.replace('/');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});
