import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  // Add a new item
  const addItem = () => {
    if (item.trim() === '') {
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: item.trim(),
      completed: false,
    };

    setItems([...items, newItem]);
    setItem('');
  };

  // Mark item as complete
  const toggleComplete = (id) => {
    setItems(
      items.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter((task) => task.id !== id));
  };

  // Display each item
  const renderItem = ({ item }) => {
    return (
      <View style={styles.taskCard}>

        <TouchableOpacity
          style={styles.taskContent}
          onPress={() => toggleComplete(item.id)}
        >
          <View
            style={[
              styles.checkCircle,
              item.completed && styles.checkCircleCompleted,
            ]}
          >
            {item.completed && (
              <Text style={styles.checkMark}>✓</Text>
            )}
          </View>

          <Text
            style={[
              styles.taskText,
              item.completed && styles.completedText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteItem(item.id)}
        >
          <Text style={styles.deleteText}>×</Text>
        </TouchableOpacity>

      </View>
    );
  };

  return (
    <View style={styles.container}>

      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>MY TASKS</Text>
          <Text style={styles.title}>To-Do List</Text>
        </View>

        <View style={styles.taskCount}>
          <Text style={styles.taskCountNumber}>
            {items.length}
          </Text>

          <Text style={styles.taskCountLabel}>
            Tasks
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.subtitle}>
        Stay organized and get things done.
      </Text>

      {/* Input */}
      <View style={styles.inputCard}>

        <TextInput
          style={styles.input}
          placeholder="What do you need to do?"
          placeholderTextColor="#999"
          value={item}
          onChangeText={setItem}
          onSubmitEditing={addItem}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addItem}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>

      </View>

      {/* Section title */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Your Tasks
        </Text>

        <Text style={styles.sectionCount}>
          {items.length}{' '}
          {items.length === 1 ? 'item' : 'items'}
        </Text>
      </View>

      {/* Task List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          items.length === 0
            ? styles.emptyList
            : styles.list
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>✓</Text>

            <Text style={styles.emptyTitle}>
              No tasks yet
            </Text>

            <Text style={styles.emptyText}>
              Add your first task above and start
              getting things done!
            </Text>

          </View>
        }
      />

    </View>
  );
}