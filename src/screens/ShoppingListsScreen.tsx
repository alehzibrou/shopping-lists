import { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { mockLists } from '@/src/data/mockData';
import { ListSummaryCard, PrimaryButton, ScreenContainer, AppText } from '@/src/components';
import { spacing } from '@/src/theme/spacing';

export function ShoppingListsScreen() {
  const router = useRouter();

  const openList = useCallback(
    (listId: string) => {
      router.push(`/list-detail?listId=${encodeURIComponent(listId)}`);
    },
    [router],
  );

  return (
    <ScreenContainer>
      <View style={styles.body}>
        <View style={styles.header}>
          <AppText variant="title">My lists</AppText>
          <AppText variant="caption" muted style={styles.subtitle}>
            Tap a list to review items. This build is for usability testing on web.
          </AppText>
        </View>
        <FlatList
          style={styles.flat}
          data={mockLists}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ListSummaryCard
              title={item.name}
              itemCount={item.itemCount}
              onPress={() => openList(item.id)}
            />
          )}
        />
        <PrimaryButton label="New list (mock)" onPress={() => {}} disabled />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  flat: {
    flex: 1,
  },
  header: {
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  subtitle: {
    lineHeight: 18,
  },
  list: {
    paddingBottom: spacing.lg,
    flexGrow: 1,
  },
});
