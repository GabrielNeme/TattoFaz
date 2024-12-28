import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 120,
    height: 90,
    alignSelf: 'center',
    marginLeft: 270,
    marginTop: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  tattooContainer: {
    backgroundColor: '#000',
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
  },
  tattooImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  tattooInfo: {
    flex: 1,
  },
  tattooTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tattooTime: {
    fontSize: 14,
    color: '#FFF',
  },
  tattooDuration: {
    fontSize: 14,
    color: '#FFF',
  },
  icon: {
    position: 'absolute',
    right: 18,
    top: 3,
  },
  tatuador: {
    marginTop: 20,
  },
  tatuadorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tatuadorImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 16,
  },
  tatuadorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tatuadorRating: {
    fontSize: 15,
    color: '#666',
  },
  tatuadorDistance: {
    fontSize: 15,
    color: '#333',
  },
});