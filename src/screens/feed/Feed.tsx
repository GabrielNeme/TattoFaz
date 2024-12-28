import {  View, Image, FlatList, TouchableOpacity, Text } from 'react-native';
import {styles} from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FeedScreen() {

  const feedData = [
    { id: '1', image: require('../../../assets/feed/feed-semanal.jpg') },
    { id: '2', image: require('../../../assets/feed/tatuagem1.jpg') },
    { id: '3', image: require('../../../assets/feed/tatuagem2.png') },
    { id: '4', image: require('../../../assets/feed/tatuagem3.jpg') },
    { id: '5', image: require('../../../assets/feed/tatuagem4.jpg') },
    { id: '6', image: require('../../../assets/feed/tatuagem5.jpg') },
  ];

  const renderFeedItem = ({ item }: { item: { id: string; image: any } }) => {
    return (
      <View style={styles.feedItem}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.feedImage} />
          
          {item.id === '1' && (
            <Text style={styles.feedText}>FEED{'\n'}SEMANAL</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image source={require('../../../assets/logos/logo-rd.png')} style={styles.logo} />
        <TouchableOpacity style={styles.messageButton}>
          <Ionicons name="chatbubble-ellipses" size={40} color="#ff0000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedData}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}