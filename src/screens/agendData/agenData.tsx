import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";

interface TattooArtist {
  name: string;
  rating: number;
  distance: number;
  address: string;
  imageUrl: any; // tipo ajustado para qualquer imagem local
}

interface TattooDesign {
  title: string;
  estimatedTime: string;
  imageUrl: any; // tipo ajustado para qualquer imagem local
}

// Dados de design e artista com require direto, pois são imagens locais
const tattooDesign: TattooDesign = {
  title: 'Índia',
  estimatedTime: '3 - 5 horas',
  imageUrl: require('../../../assets/realista/india.jpg'),
};

const tattooArtist: TattooArtist = {
  name: 'Antonio Montana',
  rating: 4.95,
  distance: 2,
  address: 'Av. Marechal Tito, 6829',
  imageUrl: require('../../../assets/agendamento/tatuador1.png'),
};

export const TattooBookingScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation() as any;


  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logos/logo_br.png')} style={styles.logo} />
      </View>

      <View style={styles.tattooDesignContainer}>
        <Image source={tattooDesign.imageUrl} style={styles.tattooImage} />
        <Text style={styles.tattooTitle}>{tattooDesign.title}</Text>
        <Text style={styles.estimatedTime}>Tempo Estimado: {tattooDesign.estimatedTime}</Text>
      </View>

      <View style={styles.artistContainer}>
        <Image source={tattooArtist.imageUrl} style={styles.artistImage} />
        <View style={styles.artistInfo}>
          <Text style={styles.artistName}>{tattooArtist.name}</Text>
          <Text style={styles.artistRating}>{tattooArtist.rating} Estrelas</Text>
          <Text style={styles.artistDistance}>{tattooArtist.distance} KM de distância</Text>
          <Text style={styles.artistAddress}>{tattooArtist.address}</Text>
        </View>
      </View>

      <View style={styles.dateTimeContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text 
            style={styles.dateText}>
              Data: 14/11/2024
            </Text>
        </TouchableOpacity>

        <Text style={styles.timeText}>
            Horário: 17h:00
          </Text>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity style={styles.confirmButton}>
        <Text 
          style={styles.confirmButtonText}
          onPress={() => navigation.navigate("Agendamento")}
          >
            CONFIRMAR
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  tattooDesignContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tattooImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  tattooTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  estimatedTime: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  artistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  artistInfo: {
    flex: 1,
  },
  artistName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistRating: {
    fontSize: 14,
    color: '#777',
  },
  artistDistance: {
    fontSize: 14,
    color: '#777',
  },
  artistAddress: {
    fontSize: 14,
    color: '#777',
  },
  dateTimeContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#FF0000',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TattooBookingScreen;