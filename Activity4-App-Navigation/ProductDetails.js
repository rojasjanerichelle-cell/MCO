import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './globalStyles';

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.detailPrice}>
        ₱{product.price}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
}