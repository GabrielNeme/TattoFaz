import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para os ícones de coração
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Importa a navegação

// Lista de tatuagens realistas
const tattooList = [
  { id: '1', title: 'ÍNDIA', image: require('../../../assets/realista/india.jpg'), estimatedTime: '3 - 5 HORAS', favorite: false },
  { id: '2', title: 'HORROR', image: require('../../../assets/realista/horror.jpg'), estimatedTime: '6 - 9 HORAS', favorite: false },
  { id: '3', title: 'HORSE', image: require('../../../assets/realista/horse.jpg'), estimatedTime: '12 - 15 HORAS', favorite: false },
];

export default function Realista() {
  const [tattoos, setTattoos] = useState(tattooList);
  const navigation = useNavigation() as any;

  const toggleFavorite = (id: string) => {
    setTattoos((prevTattoos) =>
      prevTattoos.map((tattoo) =>
        tattoo.id === id ? { ...tattoo, favorite: !tattoo.favorite } : tattoo
      )
    );
  };

  const handlePress = (title: string) => {
    if (title === 'ÍNDIA') {
      navigation.navigate('Tatuadores');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com logo */}
      <View style={styles.header}>
        <Image source={require('../../../assets/logos/logo_br.png')} style={styles.logo} />
      </View>

      {/* Título acima da lista de tatuagens */}
      <Text style={styles.pageTitle}>TATUAGENS{'\n'}REALISTAS</Text>

      {/* Lista de tatuagens */}
      <ScrollView contentContainerStyle={styles.tattooList}>
        {tattoos.map((tattoo) => (
          <TouchableOpacity
            key={tattoo.id}
            style={styles.tattooCard}
            onPress={() => handlePress(tattoo.title)} // Adiciona a navegação ao pressionar
          >
            <Image source={tattoo.image} style={styles.tattooImage} />

            <View style={styles.tattooInfo}>
              <Text style={styles.tattooTitle}>{tattoo.title}</Text>
              <Text style={styles.estimatedTime}>
                TEMPO ESTIMADO: {tattoo.estimatedTime}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.favoriteIcon}
              onPress={() => toggleFavorite(tattoo.id)}
            >
              <FontAwesome
                name={tattoo.favorite ? 'heart' : 'heart-o'}
                size={24}
                color={tattoo.favorite ? 'red' : 'gray'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
