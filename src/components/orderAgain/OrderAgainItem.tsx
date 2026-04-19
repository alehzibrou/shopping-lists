import { Image, Pressable, StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { AppText } from '@/src/components/AppText';
import { palette, paletteDark } from '@/src/theme/colors';
import { orderAgainLayout } from '@/src/theme/spacing';
import type { OrderAgainItemData } from '@/src/types/orderAgain';

const { thumbSize, thumbRadius, labelGap } = orderAgainLayout;

type Props = {
  item: OrderAgainItemData;
};

export function OrderAgainItem({ item }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;
  const onPress = item.onPress ?? (() => {});

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.line1}, ${item.line2}`}
      onPress={onPress}
      style={({ pressed }) => [styles.wrap, { opacity: pressed ? 0.88 : 1 }]}>
      <View style={[styles.thumbOuter, { width: thumbSize, height: thumbSize, borderRadius: thumbRadius }]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" accessibilityIgnoresInvertColors />
      </View>
      <View style={styles.labels}>
        <AppText variant="shortcut" style={[styles.labelLine, { color: p.contentPrimary }]}>
          {item.line1}
        </AppText>
        <AppText variant="shortcut" style={[styles.labelLine, { color: p.contentPrimary }]}>
          {item.line2}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: thumbSize,
    alignItems: 'center',
    gap: labelGap,
  },
  thumbOuter: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  labels: {
    width: '100%',
    alignItems: 'center',
  },
  labelLine: {
    textAlign: 'center',
    width: '100%',
  },
});
