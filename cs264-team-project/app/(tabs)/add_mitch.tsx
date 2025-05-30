import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useItems } from '../context/ItemContext';

export default function AddItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { addItem } = useItems();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <Button title="Save" onPress={() => {
        addItem(name, description);
        router.replace('/');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});
