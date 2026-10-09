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

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

const EMPTY_MESSAGES = {
  all: {
    title: 'No tasks yet',
    text: 'Add your first task above to get started.',
  },
  active: {
    title: 'All caught up',
    text: 'You have no active tasks right now.',
  },
  completed: {
    title: 'Nothing completed yet',
    text: 'Tasks you finish will show up here.',
  },
};

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');

  const doneCount = items.filter((task) => task.completed).length;
  const remaining = items.length - doneCount;
  const progress = items.length === 0 ? 0 : doneCount / items.length;
  const canAdd = item.trim() !== '';

  const visibleItems = items.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const filterCounts = {
    all: items.length,
    active: remaining,
    completed: doneCount,
  };

  // Add a new item
  const addItem = () => {
    if (!canAdd) {
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
      <View
        style={[
          styles.taskCard,
          item.completed && styles.taskCardCompleted,
        ]}
      >

        <TouchableOpacity
          style={styles.taskContent}
          activeOpacity={0.7}
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
          hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
          onPress={() => deleteItem(item.id)}
        >
          <Text style={styles.deleteText}>×</Text>
        </TouchableOpacity>

      </View>
    );
  };

  const empty = EMPTY_MESSAGES[filter];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>MY TASKS</Text>
          <Text style={styles.title}>To-Do List</Text>
        </View>

        <View style={styles.taskCount}>
          <Text style={styles.taskCountNumber}>
            {remaining}
          </Text>

          <Text style={styles.taskCountLabel}>
            Left
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.subtitle}>
        {items.length === 0
          ? 'Stay organized and get things done.'
          : `${doneCount} of ${items.length} completed`}
      </Text>

      {/* Progress */}
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress * 100}%` },
          ]}
        />
      </View>

      {/* Input */}
      <View style={styles.inputCard}>

        <TextInput
          style={styles.input}
          placeholder="What do you need to do?"
          placeholderTextColor="#A3A9B6"
          value={item}
          onChangeText={setItem}
          onSubmitEditing={addItem}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={[
            styles.addButton,
            !canAdd && styles.addButtonDisabled,
          ]}
          onPress={addItem}
          disabled={!canAdd}
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
          {remaining} remaining
        </Text>
      </View>

      {/* Filter tabs */}
      <View style={styles.filterBar}>
        {FILTERS.map((f) => {
          const active = filter === f.key;

          return (
            <TouchableOpacity
              key={f.key}
              style={[
                styles.filterTab,
                active && styles.filterTabActive,
              ]}
              onPress={() => setFilter(f.key)}
            >
              <Text
                style={[
                  styles.filterText,
                  active && styles.filterTextActive,
                ]}
              >
                {f.label} ({filterCounts[f.key]})
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Task List */}
      <FlatList
        data={visibleItems}
        renderItem={renderItem}
        keyExtractor={(task) => task.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={
          visibleItems.length === 0
            ? styles.emptyList
            : styles.list
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>✓</Text>

            <Text style={styles.emptyTitle}>
              {empty.title}
            </Text>

            <Text style={styles.emptyText}>
              {empty.text}
            </Text>

          </View>
        }
      />

    </KeyboardAvoidingView>
  );
}