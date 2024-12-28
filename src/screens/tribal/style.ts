import {  StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  logo: {
    width: 120,
    height: 80,
    marginTop: 30,
    resizeMode: 'contain',
  },
  backButton: {
    backgroundColor: 'transparent',
    marginTop: 30,
    borderRadius: 5,
    padding: 5,
  },
  backButtonText: {
    color: '#ff0000',
    fontSize: 16,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
    marginTop: 20,
    marginEnd: 20,
    marginRight: 20,
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  tattooList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  tattooCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  tattooImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  tattooInfo: {
    color: '#fff',
    flex: 1,
    paddingLeft: 10,
  },
  tattooTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  estimatedTime: {
    fontSize: 12,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  favoriteIcon: {
    marginRight: 15,
    marginTop: -85,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
