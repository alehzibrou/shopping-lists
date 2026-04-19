import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useColorScheme } from '@/components/useColorScheme';
import { palette, paletteDark } from '@/src/theme/colors';
import { radii, spacing } from '@/src/theme/spacing';

import { AppText } from './AppText';

type Props = {
  label: string;
  checked: boolean;
  onToggle: (next: boolean) => void;
};

export function ChecklistRow({ label, checked, onToggle }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      onPress={() => onToggle(!checked)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.row,
        {
          backgroundColor: pressed ? p.surfaceMuted : p.surface,
          borderColor: p.border,
        },
      ]}>
      <FontAwesome
        name={checked ? 'check-square' : 'square-o'}
        size={22}
        color={checked ? p.primary : p.textMuted}
        style={styles.icon}
      />
      <AppText
        variant="body"
        muted={checked}
        style={[styles.label, checked && styles.strike]}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: radii.md,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: spacing.sm,
  },
  icon: {
    marginRight: spacing.md,
  },
  label: {
    flex: 1,
  },
  strike: {
    textDecorationLine: 'line-through',
  },
});
