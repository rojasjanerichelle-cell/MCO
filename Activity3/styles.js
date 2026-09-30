import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // MAIN CONTAINER
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
    paddingTop: 55,
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
    color: '#6C63FF',
    marginBottom: 5,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#202124',
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
    marginTop: 8,
    marginBottom: 22,
  },

  // TASK COUNTER
  taskCount: {
    width: 65,
    height: 65,
    backgroundColor: '#6C63FF',
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

  // INPUT
  inputCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 7,
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333',
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '300',
    marginTop: -2,
  },

  // SECTION
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#202124',
  },

  sectionCount: {
    fontSize: 13,
    color: '#888',
  },

  // TASK LIST
  list: {
    paddingBottom: 30,
  },

  // TASK CARD
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7,

    elevation: 2,
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  // CHECK CIRCLE
  checkCircle: {
    width: 27,
    height: 27,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  checkCircleCompleted: {
    backgroundColor: '#6C63FF',
  },

  checkMark: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  // DELETE BUTTON
  deleteButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  deleteText: {
    color: '#E74C3C',
    fontSize: 24,
    lineHeight: 25,
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
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: '#E9E7FF',
    color: '#6C63FF',
    fontSize: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 65,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: '#999',
  },

});

export default styles;