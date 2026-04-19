import { ActivityIndicator, Pressable, StyleSheet, ViewStyle } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { palette, paletteDark } from '@/src/theme/colors';
import { radii, spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';

import { AppText } from './AppText';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function PrimaryButton({ label, onPress, disabled, loading, style }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;
  const busy = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={busy}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: pressed && !busy ? p.primaryPressed : p.primary, opacity: busy ? 0.55 : 1 },
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <AppText variant="subtitle" style={styles.label}>
          {label}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  label: {
    color: '#FFFFFF',
    ...typography.subtitle,
  },
});
