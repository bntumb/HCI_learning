import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero_ary4t1}>
      <Text style={styles.title_s4y0v2}>Design it. Ship the code.</Text>
      <Text style={styles.subtitle_y63e53}>Each named layer becomes its own reusable React component.</Text>
      <Pressable style={styles.action_7xryh4}>
        <Text style={styles.action_7xryh4Label}>Get started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  hero_ary4t1: {
    position: 'relative',
    width: 544,
    height: 332,
    backgroundColor: '#000000',
    borderRadius: 16,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
    elevation: 6,
  },
  title_s4y0v2: {
    position: 'absolute',
    left: 40,
    top: 45,
    width: 464,
    height: 44,
    color: '#0F172A',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 45,
    textAlign: 'left',
  },
  subtitle_y63e53: {
    position: 'absolute',
    left: 40,
    top: 100,
    width: 464,
    height: 56,
    color: '#64748B',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
  },
  action_7xryh4: {
    position: 'absolute',
    left: 40,
    top: 177,
    width: 140,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  action_7xryh4Label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
