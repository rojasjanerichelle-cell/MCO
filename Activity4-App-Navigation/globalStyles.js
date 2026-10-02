import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  smallButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  backButton: {
    backgroundColor: '#555555',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  productName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
  },

  price: {
    fontSize: 17,
    color: '#6C63FF',
    fontWeight: 'bold',
    marginTop: 6,
  },

  detailPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C63FF',
    textAlign: 'center',
    marginVertical: 15,
  },

  description: {
    fontSize: 17,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 25,
  },
});

export default styles;