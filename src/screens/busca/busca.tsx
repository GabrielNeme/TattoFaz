import { useState } from 'react';
import { TextInput, View, TouchableOpacity, FlatList, Text, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from "@react-navigation/native";


export default function SearchScreen() {
  const navigation = useNavigation() as any;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { name: 'ORIENTAL', image: require('../../../assets/busca/tatuagem-oriental2.png') },
    { name: 'TRIBAL', image: require('../../../assets/busca/tatuagem-tribal.png') },
    { name: 'REALISTA', image: require('../../../assets/busca/tatuagem-realista.png') },
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const renderCategoryItem = ({ item }: { item: { name: string; image: any } }) => {
    const isSelected = selectedCategory === item.name;
    return (
      <TouchableOpacity
      style={[styles.categoryButton, isSelected && styles.selectedCategoryButton]}
      onPress={() => {
        if (item.name === 'ORIENTAL') {
          navigation.navigate("Oriental");
        } else if (item.name === 'TRIBAL') {
          navigation.navigate("Tribal");
        } else if (item.name === 'REALISTA') {
          navigation.navigate("realista");
        }
      }}
    >
        <ImageBackground
          source={item.image}
          style={styles.categoryImageBackground}
          imageStyle={styles.categoryImage}
        >
          <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>
            {item.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logos/logo_br.png')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Busque estilos, tatuadores, estúdios..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.categoriesList}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {searchQuery && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Resultados para: "{searchQuery}"</Text>
        </View>
      )}
    </View>
  );
}
