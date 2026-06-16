import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card() {
  return (
    <View style={styles.card_zcrnl5}>
      <Image style={styles.image_1y2kz6} source={{ uri: 'https://picsum.photos/seed/1y2kz6/640/480' }} />
      <Text style={styles.title_rc6r97}>Reusable by default</Text>
      <Text style={styles.description_uqm0t8}>Group any objects inside a layer and export a self-contained component you can drop anywhere.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card_zcrnl5: {
    position: 'relative',
    width: 496,
    height: 388,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
    elevation: 6,
  },
  image_1y2kz6: {
    position: 'absolute',
    left: 24,
    top: 24,
    width: 448,
    height: 200,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  title_rc6r97: {
    position: 'absolute',
    left: 28,
    top: 244,
    width: 440,
    height: 28,
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'left',
  },
  description_uqm0t8: {
    position: 'absolute',
    left: 28,
    top: 282,
    width: 444,
    height: 64,
    color: '#64748B',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'left',
  },
});
