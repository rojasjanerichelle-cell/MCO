import { Platform, StatusBar, StyleSheet } from 'react-native';

// Colors
const colors = {
  bg: '#F5F7FB',
  surface: '#FFFFFF',
  primary: '#6C63FF',
  primarySoft: '#EEEDFF',
  primaryDisabled: '#C4C1FF',
  ink: '#1F2430',
  text: '#2F3542',
  muted: '#6B7280',
  faint: '#A3A9B6',
  border: '#E6E8F0',
  danger: '#D64545',
  track: '#E3E5F0',
};

const topInset = Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 12 : 55;

const styles = StyleSheet.create({

  // MAIN CONTAINER
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 20,
    paddingTop: topInset,
  },

  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    color: colors.primary,
    marginBottom: 5,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.ink,
  },

  subtitle: {
    fontSize: 15,
    color: colors.muted,
    marginTop: 8,
    marginBottom: 14,
  },

  // TASK COUNTER
  taskCount: {
    width: 65,
    height: 65,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskCountNumber: {
    color: 'white',
    fontSize: 21,
    fontWeight: '800',
  },

  taskCountLabel: {
    color: '#E8E6FF',
    fontSize: 11,
    marginTop: 1,
  },

  // PROGRESS
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.track,
    overflow: 'hidden',
    marginBottom: 22,
  },

  progressFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: colors.primary,
  },

  // INPUT
  inputCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 6,
    alignItems: 'center',
    marginBottom: 26,
  },

  input: {
    flex: 1,
    height: 46,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.text,
  },

  addButton: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonDisabled: {
    backgroundColor: colors.primaryDisabled,
  },

  addText: {
    color: 'white',
    fontSize: 26,
    fontWeight: '300',
    marginTop: -2,
  },

  // SECTION HEADER ("Your Tasks")
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.2,
    color: colors.ink,
  },

  sectionCount: {
    fontSize: 13,
    color: colors.muted,
  },

  // FILTER TABS
  filterBar: {
    flexDirection: 'row',
    backgroundColor: '#E9EBF3',
    borderRadius: 10,
    padding: 3,
    marginBottom: 16,
  },

  filterTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  filterTabActive: {
    backgroundColor: colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },

  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.muted,
  },

  filterTextActive: {
    color: colors.ink,
  },

  // TASK LIST
  list: {
    paddingBottom: 30,
  },

  // TASK CARD
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 8,
    marginBottom: 10,
  },

  taskCardCompleted: {
    backgroundColor: '#FAFBFD',
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  // CHECK CIRCLE
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.faint,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  checkCircleCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  checkMark: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },

  taskText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: colors.faint,
  },

  // DELETE BUTTON
  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },

  deleteText: {
    color: colors.faint,
    fontSize: 22,
    lineHeight: 24,
  },

  // EMPTY STATE
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },

  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  emptyIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primarySoft,
    color: colors.primary,
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 60,
    marginBottom: 14,
    overflow: 'hidden',
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: colors.muted,
  },

});

export default styles;