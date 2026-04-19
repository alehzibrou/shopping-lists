import { Pressable, StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { palette, paletteDark } from '@/src/theme/colors';
import { radii, spacing } from '@/src/theme/spacing';

import { AppText } from './AppText';

type Props = {
  title: string;
  itemCount: number;
  onPress: () => void;
};

export function ListSummaryCard({ title, itemCount, onPress }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: p.surfaceMuted,
          borderColor: p.border,
          opacity: pressed ? 0.92 : 1,
        },
      ]}>
      <View style={styles.row}>
        <AppText variant="subtitle" style={styles.title} numberOfLines={2}>
          {title}
        </AppText>
        <AppText variant="caption" muted>
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </AppText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radii.lg,
    padding: spacing.lg,
    marginBottom: spacing.sm,
  },
  row: {
    gap: spacing.xs,
  },
  title: {
    flexShrink: 1,
  },
});
