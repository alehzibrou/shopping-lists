import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { AppText } from '@/src/components/AppText';
import { orderAgainItems } from '@/src/data/orderAgain';
import { palette, paletteDark } from '@/src/theme/colors';
import { orderAgainLayout, radii, spacing } from '@/src/theme/spacing';

import { OrderAgainItem } from './OrderAgainItem';

const {
  horizontalPadding,
  verticalPadding,
  headerToRowGap,
  titleRowGap,
  itemGap,
} = orderAgainLayout;

type Props = {
  onPressAll?: () => void;
};

export function OrderAgainCarousel({ onPressAll }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;

  return (
    <View style={styles.section}>
      <View
        style={[
          styles.outer,
          {
            paddingHorizontal: horizontalPadding,
            paddingVertical: verticalPadding,
            gap: headerToRowGap,
          },
        ]}>
        <View style={[styles.titleRow, { gap: titleRowGap }]}>
          <View style={styles.titleFlex}>
            <AppText variant="headingXs" style={{ color: p.contentPrimary }} numberOfLines={1}>
              Order again
            </AppText>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="View all past orders"
            onPress={onPressAll ?? (() => {})}
            style={({ pressed }) => [
              styles.allLink,
              { borderRadius: radii.sm, opacity: pressed ? 0.75 : 1 },
            ]}>
            <AppText variant="bodySAccent" style={{ color: p.contentPrimary }}>
              All
            </AppText>
            <FontAwesome name="chevron-right" size={18} color={p.contentPrimary} />
          </Pressable>
        </View>

        <ScrollView
          nativeID="order-again-carousel"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[
            styles.scrollContent,
            Platform.OS === 'web' && (webScrollHide as object),
          ]}
          style={Platform.OS === 'web' ? (webScrollHide as object) : undefined}>
          {orderAgainItems.map((item, index) => (
            <View
              key={item.id}
              style={{
                marginRight: index === orderAgainItems.length - 1 ? 0 : itemGap,
              }}>
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
  outer: {
    width: '100%',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  titleFlex: {
    flex: 1,
    minWidth: 0,
  },
  allLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: 2,
    paddingLeft: spacing.xs,
  },
  scrollContent: {
    alignItems: 'flex-start',
    paddingRight: horizontalPadding,
  },
});
