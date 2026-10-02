import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Store</Text>

      <Text style={styles.subtitle}>
        Find simple and affordable products.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>View Products</Text>
      </TouchableOpacity>
    </View>
  );
}