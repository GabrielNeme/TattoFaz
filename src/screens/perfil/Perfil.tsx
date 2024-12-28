import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation() as any;


  return (
    <ScrollView>
       <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../../assets/logos/logo-rd.png')} style={styles.logo} />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={require('../../../assets/perfil/perfil.png')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Gabriel Costa</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configurar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configurações Gerais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Meus Endereços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Status da Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Segurança</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Option */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text 
          style={styles.logoutText}
          onPress={() => navigation.navigate("Login")}
          >
            Sair
          </Text>
      </TouchableOpacity>
    </View>  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  logo: {
    width: 120,
    height: 90,
    alignSelf: 'center',
    marginLeft: 250,
    marginTop: 20,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
  },
  profileRating: {
    fontSize: 14,
    color: '#777',
  },
  menu: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
