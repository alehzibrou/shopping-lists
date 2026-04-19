import { Platform, ScrollView, StyleSheet, View } from 'react-native';

import { homeShortcuts } from '@/src/data/shortcuts';
import { shortcutsLayout, spacing } from '@/src/theme/spacing';

import { ShortcutItem } from './ShortcutItem';

const { horizontalPadding, verticalPadding, itemGap } = shortcutsLayout;

export function ShortcutsCarousel() {
  return (
    <View style={styles.section}>
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
              marginRight: index === homeShortcuts.length - 1 ? 0 : itemGap,
            }}>
            <ShortcutItem item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const webScrollHide = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
} as const;

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.xl,
  },
  scrollContent: {
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    paddingTop: verticalPadding,
    paddingBottom: verticalPadding,
    alignItems: 'flex-start',
  },
});
