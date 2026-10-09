import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import styles from './styles';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const doneCount = items.filter((task) => task.completed).length;
  const remaining = items.length - doneCount;
  const progress = items.length === 0 ? 0 : doneCount / items.length;
  const canAdd = item.trim() !== '';

  // Add a new item
  const addItem = () => {
    if (!canAdd) {
      return;
    }

    setItems([
      ...items,
      { id: Date.now().toString(), name: item.trim(), completed: false },
    ]);
    setItem('');
  };

  // Mark item as complete
  const toggleComplete = (id) => {
    setItems(
      items.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter((task) => task.id !== id));
  };

  // Display each item
  const renderItem = ({ item }) => (
    <View style={styles.taskRow}>
      <TouchableOpacity
        style={styles.taskContent}
        activeOpacity={0.7}
        onPress={() => toggleComplete(item.id)}
      >
        <View
          style={[styles.checkBox, item.completed && styles.checkBoxCompleted]}
        >
          {item.completed && <Text style={styles.checkMark}>✓</Text>}
        </View>

        <Text
          style={[styles.taskText, item.completed && styles.completedText]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>To-Do List</Text>
        <Text style={styles.bigCount}>
          {remaining}{' '}
          <Text style={styles.bigCountLabel}>
            {remaining === 1 ? 'task left' : 'tasks left'}
          </Text>
        </Text>

        <View style={styles.progressTrack}>
          <View
            style={[styles.progressFill, { width: `${progress * 100}%` }]}
          />
        </View>
      </View>

      {/* Sheet */}
      <View style={styles.sheet}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(task) => task.id}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={
            items.length === 0 ? styles.emptyList : styles.list
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No tasks yet</Text>
              <Text style={styles.emptyText}>
                Type a task below and tap + to add it.
              </Text>
            </View>
          }
        />

        {/* Input */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Add a task"
            placeholderTextColor="#B9BDD0"
            value={item}
            onChangeText={setItem}
            onSubmitEditing={addItem}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={[styles.addButton, !canAdd && styles.addButtonDisabled]}
            onPress={addItem}
            disabled={!canAdd}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}