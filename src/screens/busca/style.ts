import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#ff0000',
      },
      logo: {
        width: 120,
        height: 90,
        marginTop: 25,
        resizeMode: 'contain',
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      },
      searchIcon: {
        marginRight: 10,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
      categoriesContainer: {
        flex: 1,
        alignItems: 'center',
      },
      categoriesList: {
        alignItems: 'center',
      },
      categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginVertical: 10,
      },
      selectedCategoryButton: {
        backgroundColor: '#fff',
      },
      categoryImageBackground: {
        width: 380,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        overflow: 'hidden',
      },
      categoryImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      categoryText: {
        fontSize: 40,
        color: '#fff',
        marginTop: 80,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      selectedCategoryText: {
        color: '#fff',
      },
      resultsContainer: {
        marginTop: 20,
      },
      resultsText: {
        fontSize: 16,
        color: '#555',
      },
    });
    