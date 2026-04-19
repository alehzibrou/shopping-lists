import { Image, Pressable, StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { AppText } from '@/src/components/AppText';
import { palette, paletteDark } from '@/src/theme/colors';
import { radii, shortcutsLayout } from '@/src/theme/spacing';
import type { ShortcutItemData } from '@/src/types/shortcuts';

type Props = {
  item: ShortcutItemData;
};

const { itemWidth, iconOuter, iconInner, iconPadding, columnGap } = shortcutsLayout;

export function ShortcutItem({ item }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;
  const onPress = item.onPress ?? (() => {});

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={item.label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrap,
        { width: itemWidth, opacity: pressed ? 0.88 : 1 },
      ]}>
      <View
        style={[
          styles.iconBubble,
          {
            width: iconOuter,
            height: iconOuter,
            borderRadius: iconOuter / 2,
            backgroundColor: p.shortcutIconBg,
            padding: iconPadding,
          },
        ]}>
        <View style={styles.iconInner}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode={item.resizeMode ?? 'contain'}
            accessibilityIgnoresInvertColors
          />
        </View>
      </View>
      <AppText variant="shortcut" numberOfLines={2} style={[styles.label, { color: p.contentPrimary }]}>
        {item.label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    gap: columnGap,
    borderRadius: radii.shortcut,
    overflow: 'hidden',
  },
  iconBubble: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconInner: {
    width: iconInner,
    height: iconInner,
    alignItems: 'center',
    justifyContent: 'center',
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
