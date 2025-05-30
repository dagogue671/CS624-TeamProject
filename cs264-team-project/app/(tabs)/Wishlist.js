// WishlistScreen.js
import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const wishlistData = [
  {
    id: '1',
    title: 'God of War Ragnarök',
    platform: 'PS5',
    genre: 'Action',
    image: {uri: 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg'},
  },
  {
    id: '2',
    title: 'Resident Evil Village',
    platform: 'PS5',
    genre: 'Horror',
    image: {uri: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png'},
  },
  {
    id: '3',
    title: "Baldur's Gate 3",
    platform: 'PC',
    genre: 'RPG',
    image: {uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfHf00n-K29UJL0yUMLv6-MIsfGv1F7YuGprMdjVequP_n3St8'},
  },
];

export default function WishlistScreen() {

const [wishlist, setWishlist] = useState(wishlistData);


const removeFromWishlist = (id) => {
  const updatedList = wishlist.filter(item => item.id !== id);
  setWishlist(updatedList);
  alert('Pressed');
};


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.platform} : {item.genre}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromWishlist(item.id)}>
        <Text style={styles.heart}>
            ❤️
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wishlist</Text>
      <TextInput placeholder="Search" style={styles.searchBar} />
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>No games in your wishlist yet!</Text>
            <Text style={styles.emptySubText}>Add games by tapping the 🤍 icon</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  searchBar: {
    borderColor: '#ccc', borderWidth: 1, borderRadius: 8,
    padding: 10, marginBottom: 12
  },
  card: {
    flexDirection: 'row', alignItems: 'center',
    padding: 10, marginBottom: 12,
    backgroundColor: '#f9f9f9', borderRadius: 12
  },
  image: { width: 60, height: 60, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { color: '#666', fontSize: 12 },
  price: { fontWeight: 'bold', marginTop: 4 },
  actionButton: {
    marginTop: 4, backgroundColor: '#eee',
    paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6
  },
  actionText: { fontSize: 12, color: '#333' },
  heart: { fontSize: 20, marginLeft: 10 },
  emptyBox: { alignItems: 'center', marginTop: 40 },
  emptyText: { fontSize: 16, fontWeight: 'bold' },
  emptySubText: { color: '#888', marginTop: 4 },
});

