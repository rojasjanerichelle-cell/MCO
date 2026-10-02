import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './globalStyles';

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 899,
    description: 'Comfortable wireless headphones with clear sound.',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 1299,
    description: 'A simple smartwatch for everyday activities.',
  },
  {
    id: '3',
    name: 'Portable Speaker',
    price: 699,
    description: 'Compact speaker with good sound quality.',
  },
];

export default function ProductList({ navigation }) {
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.productName}>{item.name}</Text>

      <Text style={styles.price}>₱{item.price}</Text>

      <TouchableOpacity
        style={styles.smallButton}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            product: item,
          })
        }
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}