import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para os ícones de coração
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

// Lista de tatuagens orientais
const tattooList = [
  { id: '1', title: 'DRAGÃO', image: require('../../../assets/oriental/oriental4.png'), estimatedTime: '5 - 7 HORAS', favorite: false },
  { id: '2', title: 'MÁSCARA ONI', image: require('../../../assets/oriental/oriental1.png'), estimatedTime: '6 - 9 HORAS', favorite: false },
  { id: '3', title: 'FLORES JAPONESAS', image: require('../../../assets/oriental/oriental2.png'), estimatedTime: '4 - 6 HORAS', favorite: false },
];

export default function Oriental() {
  const [tattoos, setTattoos] = useState(tattooList);

  const toggleFavorite = (id: string) => {
    setTattoos((prevTattoos) =>
      prevTattoos.map((tattoo) =>
        tattoo.id === id ? { ...tattoo, favorite: !tattoo.favorite } : tattoo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com logo */}
      <View style={styles.header}>
        <Image source={require('../../../assets/logos/logo_br.png')} style={styles.logo} />
      </View>

      {/* Título acima da lista de tatuagens */}
      <Text style={styles.pageTitle}>TATUAGENS{'\n'}ORIENTAIS</Text>

      {/* Lista de tatuagens */}
      <ScrollView contentContainerStyle={styles.tattooList}>
        {tattoos.map((tattoo) => (
          <View key={tattoo.id} style={styles.tattooCard}>
            <Image source={tattoo.image} style={styles.tattooImage} />
            <View style={styles.tattooInfo}>
              <Text style={styles.tattooTitle}>{tattoo.title}</Text>
              <Text style={styles.estimatedTime}>TEMPO ESTIMADO: {tattoo.estimatedTime}</Text>
            </View>
            <TouchableOpacity
              style={styles.favoriteIcon} // Aplica o estilo personalizado
              onPress={() => toggleFavorite(tattoo.id)}
            >
              <FontAwesome
                name={tattoo.favorite ? 'heart' : 'heart-o'}
                size={24}
                color={tattoo.favorite ? 'red' : 'gray'} // Alterei de 'black' para 'gray'
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
