import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useColorScheme } from '@/components/useColorScheme';
import { palette, paletteDark } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';

type Props = PropsWithChildren<{
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
}>;

export function ScreenContainer({ children, edges = ['top', 'left', 'right'] }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const bg = scheme === 'dark' ? paletteDark.surface : palette.surface;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]} edges={edges}>
      <View style={styles.inner}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
});
