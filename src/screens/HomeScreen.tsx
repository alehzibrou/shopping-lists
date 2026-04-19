import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { AppText, ScreenContainer } from '@/src/components';
import { OrderAgainCarousel } from '@/src/components/orderAgain';
import { ShortcutsCarousel } from '@/src/components/shortcuts';
import { palette, paletteDark } from '@/src/theme/colors';
import { radii, spacing } from '@/src/theme/spacing';
import { useColorScheme } from '@/components/useColorScheme';

const MAX_CONTENT = 720;

export function HomeScreen() {
  const { width } = useWindowDimensions();
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;
  const contentWidth = Math.min(MAX_CONTENT, width);
  const gutter = Math.max(spacing.lg, (width - contentWidth) / 2);

  return (
    <ScreenContainer noHorizontalPadding edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: spacing.xxl }]}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.column, { width: contentWidth, marginHorizontal: gutter }]}>
          <View style={styles.hero}>
            <AppText variant="title" style={{ color: p.contentPrimary }}>
              Home
            </AppText>
            <AppText variant="caption" muted style={styles.lede}>
              Browse shortcuts below, then open your shopping lists when you are ready.
            </AppText>
          </View>
        </View>

        <ShortcutsCarousel />

        <OrderAgainCarousel />

        <View style={[styles.column, { width: contentWidth, marginHorizontal: gutter }]}>
          <Link href="/(tabs)/lists" asChild>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.listsCta,
                {
                  borderColor: p.border,
                  backgroundColor: p.shortcutIconBg,
                  opacity: pressed ? 0.9 : 1,
                },
              ]}>
              <AppText variant="subtitle" style={{ color: p.contentPrimary }}>
                My lists
              </AppText>
              <AppText variant="caption" muted>
                View and edit your shopping lists
              </AppText>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  column: {
    alignSelf: 'center',
  },
  hero: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    gap: spacing.sm,
  },
  lede: {
    lineHeight: 20,
    maxWidth: 520,
  },
  listsCta: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radii.lg,
    padding: spacing.lg,
    gap: spacing.xs,
  },
});
