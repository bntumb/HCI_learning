import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.hero_ary4t1}>
      <Text style={styles.title_s4y0v2}>Design it. Ship the code.</Text>
      <Text style={styles.subtitle_y63e53}>Each named layer becomes its own reusable React component.</Text>
      <Pressable style={styles.action_7xryh4}>
        <Text style={styles.action_7xryh4Label}>Get started</Text>
      </Pressable>
      <View style={styles.frame_83mx89} />
      <View style={styles.group1_5680zc}>
        <Pressable style={styles.button_quxeya}>
          <Text style={styles.button_quxeyaLabel}>Button</Text>
        </Pressable>
        <Pressable style={styles.button_s542jb}>
          <Text style={styles.button_s542jbLabel}>Button</Text>
        </Pressable>
        <Pressable style={styles.button_0jxy6d}>
          <Text style={styles.button_0jxy6dLabel}>Button</Text>
        </Pressable>
      </View>
      <View style={styles.group2_u78o3h} />
      <View style={styles.frame_iu1vif}>
        <Image style={styles.image_grpzke} source={{ uri: 'https://picsum.photos/seed/grpzke/640/480' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero_ary4t1: {
    position: 'relative',
    width: 544,
    height: 332,
    backgroundColor: '#ffffff',
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
    top: 20,
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
  frame_83mx89: {
    position: 'absolute',
    left: 31,
    top: 74,
    width: 483,
    height: 8,
    overflow: 'hidden',
    backgroundColor: '#ff8ac2',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  group1_5680zc: {
    position: 'absolute',
    left: 47,
    top: 241,
    width: 346,
    height: 46,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    borderRadius: 179,
  },
  button_quxeya: {
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
  button_quxeyaLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  button_s542jb: {
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
  button_s542jbLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  button_0jxy6d: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F46E5',
    borderRadius: 200,
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
  button_0jxy6dLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  group2_u78o3h: {
    position: 'absolute',
    left: 325,
    top: 147,
    width: 46,
    height: 46,
    flexDirection: 'column',
    gap: 12,
    alignItems: 'flex-start',
  },
  frame_iu1vif: {
    position: 'absolute',
    left: 430,
    top: 170,
    width: 46,
    height: 46,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  image_grpzke: {
    position: 'absolute',
    left: -8,
    top: -11,
    width: 54,
    height: 64,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
    borderRadius: 16,
    resizeMode: 'cover',
  },
});
