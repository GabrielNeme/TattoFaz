import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

// Dados de agendamentos
const appointments = [
  {
    id: '1',
    status: 'Confirmado',
    date: '14/11 - 17H',
    location: 'Av. Marechal Tito, 6829',
    phone: '(11) 98888-7777',
    artist: { name: 'ANTONIO MONTANA', image: require('../../../assets/agendamento/tatuador1.png') },
  },
  {
    id: '2',
    status: 'Finalizado',
    date: '13/09 - 10H',
    location: 'Av. São Miguel, 984',
    phone: '(11) 4002-8922',
    artist: { name: 'CARLOS EDUARDO', image: require('../../../assets/agendamento/tatuador2.png') },
  },
  {
    id: '3',
    status: 'Finalizado',
    date: '03/04 - 21H',
    location: 'Av. PAULISTA, 1234',
    phone: '(11) 7070-1234',
    artist: { name: 'JULIA MATOS', image: require('../../../assets/agendamento/tatuador3.png') },
  },
];

interface AgendamentosProps {
  onBack: () => void;
}

export default function Agendamentos({ onBack }: AgendamentosProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com logo e botão de voltar */}
      <View style={styles.header}>
        <Image source={require('../../../assets/logos/logo_br.png')} style={styles.logo} />
      </View>

      {/* Título da página */}
      <Text style={styles.pageTitle}>AGENDAMENTOS</Text>

      {/* Lista de agendamentos */}
      <ScrollView contentContainerStyle={styles.appointmentList}>
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.appointmentTitle}>
                • AGENDAMENTO #{appointment.id}
              </Text>
              <Text
                style={[styles.status, appointment.status === 'Confirmado' ? styles.confirmed : styles.finalized]}
              >
                {appointment.status}
              </Text>
            </View>
            <View style={styles.appointmentDetails}>
              <View style={styles.detailsContainer}>
                <Text style={styles.appointmentText}>DATA:</Text>
                <Text style={styles.appointmentTextDate}>{appointment.date}</Text>
                <Text style={styles.appointmentDetail}>{appointment.location}</Text>
                <Text style={styles.appointmentDetail}>{appointment.phone}</Text>
              </View>
              <View style={styles.artistInfo}>
                <Image source={appointment.artist.image} style={styles.artistImage} />
                <Text style={styles.artistLabel}>TATUADOR (A)</Text>
                <Text style={styles.artistName}>
                  {appointment.artist.name.split(' ').map((word, index) => (
                    <Text key={index}>
                      {word}
                      {index !== appointment.artist.name.split(' ').length - 1 && <Text>{'\n'}</Text>}
                    </Text>
                  ))}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>
                {appointment.status === 'Confirmado' ? 'Solicitar cancelamento' : ''}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
