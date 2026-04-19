import { useMemo } from 'react';
import { Platform, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { AppText } from '@/src/components/AppText';
import { homeShortcuts } from '@/src/data/shortcuts';
import { spacing } from '@/src/theme/spacing';

import { ShortcutItem } from './ShortcutItem';

const EDGE_PAD = spacing.lg;
const GAP = spacing.md;
const MIN_ITEM = 76;
const MAX_ITEM = 104;
/** Target visible columns (fractional) so the strip feels scrollable on phones. */
const TARGET_VISIBLE = 4.25;

function useShortcutMetrics() {
  const { width } = useWindowDimensions();
  return useMemo(() => {
    const usable = Math.max(0, width - EDGE_PAD * 2);
    const raw = usable / TARGET_VISIBLE;
    const itemWidth = Math.min(MAX_ITEM, Math.max(MIN_ITEM, raw));
    const imageSize = Math.max(56, Math.round(itemWidth - spacing.sm * 2));
    return { itemWidth, imageSize };
  }, [width]);
}

export function ShortcutsCarousel() {
  const { itemWidth, imageSize } = useShortcutMetrics();

  return (
    <View style={styles.section}>
      <View style={styles.titleRow}>
        <AppText variant="subtitle">Shortcuts</AppText>
      </View>
      <ScrollView
        nativeID="shortcuts-carousel"
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS === 'web' && (webScrollHide as object),
        ]}
        style={Platform.OS === 'web' ? (webScrollHide as object) : undefined}>
        {homeShortcuts.map((item, index) => (
          <View
            key={item.id}
            style={{
              marginRight: index === homeShortcuts.length - 1 ? 0 : GAP,
            }}>
            <ShortcutItem item={item} imageSize={imageSize} itemWidth={itemWidth} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

/** RN Web: reduce horizontal scrollbar visibility (see app/+html.tsx for webkit). */
const webScrollHide = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
} as const;

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.xl,
  },
  titleRow: {
    paddingHorizontal: EDGE_PAD,
    marginBottom: spacing.md,
  },
  scrollContent: {
    paddingLeft: EDGE_PAD,
    paddingRight: EDGE_PAD,
    paddingBottom: spacing.xs,
    alignItems: 'flex-start',
  },
});
