import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 18,
  },

  smallText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#202124',
  },

  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  welcomeCard: {
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 22,
    backgroundColor: '#6C63FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },

  welcomeSmall: {
    color: '#DCD9FF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 5,
  },

  welcomeTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 7,
  },

  welcomeDescription: {
    color: '#E9E7FF',
    fontSize: 13,
    maxWidth: 230,
    lineHeight: 19,
  },

  welcomeEmoji: {
    fontSize: 42,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#202124',
    marginHorizontal: 22,
    marginTop: 26,
    marginBottom: 13,
  },

  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
  },

  statIcon: {
    fontSize: 22,
    marginBottom: 7,
  },

  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#202124',
  },

  statLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 3,
  },

  actionsContainer: {
    paddingHorizontal: 20,
  },

  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 17,
    padding: 16,
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  actionIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#F0EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  actionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },

  actionSubtitle: {
    fontSize: 12,
    color: '#888',
  },

  activityCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },

  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#EEF9F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  activityContent: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222',
    marginBottom: 3,
  },

  activityDescription: {
    fontSize: 12,
    color: '#888',
  },

  completed: {
    fontSize: 11,
    fontWeight: '700',
    color: '#32A852',
  },

  pending: {
    fontSize: 11,
    fontWeight: '700',
    color: '#F2994A',
  },

  bottomSpace: {
    height: 35,
  },
});

export default styles;