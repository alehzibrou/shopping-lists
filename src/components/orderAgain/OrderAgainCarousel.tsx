import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { AppText } from '@/src/components/AppText';
import { orderAgainItems } from '@/src/data/orderAgain';
import { palette, paletteDark } from '@/src/theme/colors';
import { orderAgainLayout, spacing } from '@/src/theme/spacing';

import { OrderAgainItem } from './OrderAgainItem';

const {
  horizontalPadding,
  verticalPadding,
  headerToRowGap,
  titleRowGap,
  itemGap,
  metaHeaderWidth,
  metaHeaderHeight,
  metaHeaderPaddingTop,
  allLinkGap,
  allLinkRadius,
} = orderAgainLayout;

type Props = {
  onPressAll?: () => void;
};

export function OrderAgainCarousel({ onPressAll }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;

  return (
    <View style={styles.section}>
      {/* Figma 70121:70105 — column py-12 gap-16; no horizontal padding on root */}
      <View style={[styles.root, { paddingVertical: verticalPadding, gap: headerToRowGap }]}>
        {/* Header 70121:70475 — px-24 w-full */}
        <View style={[styles.header, { paddingHorizontal: horizontalPadding }]}>
          {/* Title 70121:70476 — row gap-12 items-start */}
          <View style={[styles.titleRow, { gap: titleRowGap }]}>
            {/* text 70121:70477 — flex-1 items-center */}
            <View style={styles.titleCell}>
              <AppText variant="headingXs" style={{ color: p.contentPrimary }} numberOfLines={1}>
                Order again
              </AppText>
            </View>
            {/* [Header] Meta Header M 70121:70487 */}
            <View
              style={[
                styles.metaHeader,
                {
                  width: metaHeaderWidth,
                  height: metaHeaderHeight,
                  paddingTop: metaHeaderPaddingTop,
                },
              ]}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="View all past orders"
                onPress={onPressAll ?? (() => {})}
                style={({ pressed }) => [
                  styles.allLink,
                  {
                    gap: allLinkGap,
                    borderRadius: allLinkRadius,
                    opacity: pressed ? 0.75 : 1,
                  },
                ]}>
                <AppText variant="bodySAccent" style={{ color: p.contentPrimary }}>
                  All
                </AppText>
                <FontAwesome name="chevron-right" size={18} color={p.contentPrimary} />
              </Pressable>
            </View>
          </View>
        </View>

        {/* [Eater] Provider section 70121:70156 — row gap-12 px-24 w-full */}
        <ScrollView
          nativeID="order-again-carousel"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContent,
            { paddingHorizontal: horizontalPadding },
            Platform.OS === 'web' && (webScrollHide as object),
          ]}
          style={Platform.OS === 'web' ? (webScrollHide as object) : undefined}>
          {orderAgainItems.map((item, index) => (
            <View
              key={item.id}
              style={index === orderAgainItems.length - 1 ? undefined : { marginRight: itemGap }}>
              <OrderAgainItem item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
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
  root: {
    width: '100%',
  },
  header: {
    width: '100%',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  titleCell: {
    flex: 1,
    minWidth: 0,
    minHeight: orderAgainLayout.metaHeaderHeight,
    justifyContent: 'center',
  },
  metaHeader: {
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  allLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
