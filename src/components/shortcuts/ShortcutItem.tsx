import { Image, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/src/components/AppText';
import { radii, spacing } from '@/src/theme/spacing';
import type { ShortcutItemData } from '@/src/types/shortcuts';

type Props = {
  item: ShortcutItemData;
  imageSize: number;
  itemWidth: number;
};

export function ShortcutItem({ item, imageSize, itemWidth }: Props) {
  const onPress = item.onPress ?? (() => {});

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.label}
      onPress={onPress}
      style={({ pressed }) => [styles.wrap, { width: itemWidth, opacity: pressed ? 0.88 : 1 }]}>
      <View style={[styles.imageFrame, { width: imageSize, height: imageSize, borderRadius: radii.lg }]}>
        <Image source={item.image} style={styles.image} resizeMode="cover" accessibilityIgnoresInvertColors />
      </View>
      <AppText variant="caption" numberOfLines={2} style={[styles.label, { fontWeight: '500' }]}>
        {item.label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    paddingHorizontal: spacing.xs,
  },
  imageFrame: {
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    textAlign: 'center',
    width: '100%',
  },
});
