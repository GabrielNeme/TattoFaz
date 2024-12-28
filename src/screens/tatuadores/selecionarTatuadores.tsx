import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {styles}  from './style';


const TatuadoresScreen: React.FC = () => {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logos/logo-rd.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>SELECIONE O TATUADOR</Text>

      <View style={styles.tattooContainer}>
        <Image
          source={require('../../../assets/realista/india.jpg')}
          style={styles.tattooImage}
        />
        <View style={styles.tattooInfo}>
          <Text style={styles.tattooTitle}>"SEM CORAÇÃO"</Text>
          <Text style={styles.tattooTime}>TEMPO ESTIMADO</Text>
          <Text style={styles.tattooDuration}>5-6 HORAS</Text>
          <FontAwesome name="heart" size={24} color="red" style={styles.icon} />
        </View>
      </View>

      <View style={styles.tatuador}>
        {/* Adicione a navegação no TatuadorItem */}
        <TatuadorItem
          image={require('../../../assets/agendamento/tatuador1.png')}
          name="ANTONIO MONTANA"
          rating="4.95 ESTRELAS"
          distance="2 KM DE DISTÂNCIA"
          onPress={() => navigation.navigate('TattooBookingScreen')}
        />
        <TatuadorItem
          image={require('../../../assets/agendamento/tatuador2.png')}
          name="MANOEL GOMES"
          rating="4.75 ESTRELAS"
          distance="3.2 KM DE DISTÂNCIA"
          onPress={() => {}}
        />
        <TatuadorItem
          image={require('../../../assets/agendamento/tatuador3.png')}
          name="PAULA SILVA"
          rating="4.22 ESTRELAS"
          distance="6 KM DE DISTÂNCIA"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const TatuadorItem: React.FC<{ 
  image: any; 
  name: string; 
  rating: string; 
  distance: string; 
  onPress: () => void; 
}> = ({ image, name, rating, distance, onPress }) => {
  return (
    <TouchableOpacity style={styles.tatuadorItem} onPress={onPress}>
      <Image source={image} style={styles.tatuadorImage} />
      <View>
        <Text style={styles.tatuadorName}>{name}</Text>
        <Text style={styles.tatuadorRating}>{rating}</Text>
        <Text style={styles.tatuadorDistance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TatuadoresScreen;
