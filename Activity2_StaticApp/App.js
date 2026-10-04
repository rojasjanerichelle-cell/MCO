import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Hello! 👋</Text>
            <Text style={styles.title}>My Dashboard</Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>RJ</Text>
          </View>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <View>
            <Text style={styles.welcomeSmall}>WELCOME BACK</Text>

            <Text style={styles.welcomeTitle}>
              Richelle Jane
            </Text>

            <Text style={styles.welcomeDescription}>
              Stay focused and keep growing every day.
            </Text>
          </View>

          <Text style={styles.welcomeEmoji}>✨</Text>
        </View>

        {/* Overview */}
        <Text style={styles.sectionTitle}>Overview</Text>

        <View style={styles.statsRow}>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📚</Text>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Courses</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>✅</Text>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Progress</Text>
          </View>

        </View>

        {/* Quick Access */}
        <Text style={styles.sectionTitle}>Quick Access</Text>

        <View style={styles.actionsContainer}>

          <View style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text>📖</Text>
            </View>

            <View>
              <Text style={styles.actionTitle}>
                My Courses
              </Text>

              <Text style={styles.actionSubtitle}>
                View your subjects
              </Text>
            </View>
          </View>

          <View style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text>📝</Text>
            </View>

            <View>
              <Text style={styles.actionTitle}>
                Assignments
              </Text>

              <Text style={styles.actionSubtitle}>
                Check your tasks
              </Text>
            </View>
          </View>

          <View style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text>📅</Text>
            </View>

            <View>
              <Text style={styles.actionTitle}>
                Schedule
              </Text>

              <Text style={styles.actionSubtitle}>
                View your schedule
              </Text>
            </View>
          </View>

        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>
          Recent Activity
        </Text>

        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Text>✓</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              Activity 2
            </Text>

            <Text style={styles.activityDescription}>
              Static App UI
            </Text>
          </View>

          <Text style={styles.completed}>
            Done
          </Text>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Text>💻</Text>
          </View>

          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>
              Programming
            </Text>

            <Text style={styles.activityDescription}>
              Practice activity
            </Text>
          </View>

          <Text style={styles.pending}>
            Pending
          </Text>
        </View>

        <View style={styles.bottomSpace} />

      </ScrollView>
    </SafeAreaView>
  );
}