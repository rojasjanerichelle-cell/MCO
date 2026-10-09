import { Platform, StatusBar, StyleSheet } from 'react-native';

// Palette
const colors = {
  blue: '#2B3FE0',
  blueDeep: '#1F2FB5',
  blueTint: '#A9B3FF',
  yellow: '#FFD23F',
  ink: '#14172B',
  muted: '#7A7F99',
  faint: '#B9BDD0',
  line: '#E8EAF3',
  sheet: '#FFFFFF',
  danger: '#D6453D',
};

const topInset = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 56;

const styles = StyleSheet.create({
  // LAYOUT
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },

  // HEADER (colour block)
  header: {
    paddingTop: topInset + 8,
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.blueTint,
  },

  bigCount: {
    fontSize: 54,
    fontWeight: '800',
    letterSpacing: -2,
    color: '#FFFFFF',
    marginTop: 6,
  },

  bigCountLabel: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    color: colors.blueTint,
  },

  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.blueDeep,
    marginTop: 18,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: colors.yellow,
  },

  // SHEET (white panel)
  sheet: {
    flex: 1,
    backgroundColor: colors.sheet,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 8,
  },

  list: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 24,
  },

  // TASK ROW
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkBox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.ink,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  checkBoxCompleted: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
  },

  checkMark: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '900',
  },

  taskText: {
    flex: 1,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '500',
    color: colors.ink,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: colors.faint,
    fontWeight: '400',
  },

  deleteButton: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  deleteText: {
    color: colors.faint,
    fontSize: 24,
    lineHeight: 26,
  },

  // INPUT (docked at bottom)
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 34 : 18,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.sheet,
  },

  input: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F2F3F9',
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.ink,
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  addButtonDisabled: {
    backgroundColor: colors.faint,
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '400',
  },

  // EMPTY STATE
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.ink,
    marginBottom: 6,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
});

export default styles;