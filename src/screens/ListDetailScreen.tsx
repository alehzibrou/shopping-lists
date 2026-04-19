import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { getItemsForList, mockLists } from '@/src/data/mockData';
import type { ShoppingItem } from '@/src/types/shoppingList';
import { AppText, ChecklistRow, PrimaryButton, ScreenContainer } from '@/src/components';
import { spacing } from '@/src/theme/spacing';

export function ListDetailScreen() {
  const navigation = useNavigation();
  const { listId } = useLocalSearchParams<{ listId?: string }>();
  const resolvedId = typeof listId === 'string' ? listId : mockLists[0]?.id ?? '1';

  const listMeta = useMemo(
    () => mockLists.find((l) => l.id === resolvedId) ?? mockLists[0],
    [resolvedId],
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: listMeta?.name ?? 'List' });
  }, [navigation, listMeta?.name]);

  const [items, setItems] = useState<ShoppingItem[]>(() => getItemsForList(resolvedId));

  useEffect(() => {
    setItems(getItemsForList(resolvedId));
  }, [resolvedId]);

  const toggleItem = useCallback((id: string, next: boolean) => {
    setItems((prev) => prev.map((row) => (row.id === id ? { ...row, checked: next } : row)));
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.body}>
        <View style={styles.header}>
          <AppText variant="caption" muted>
            Check items off as you shop. State resets when you reload (prototype).
          </AppText>
        </View>
        <FlatList
          style={styles.flat}
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ChecklistRow label={item.name} checked={item.checked} onToggle={(v) => toggleItem(item.id, v)} />
          )}
        />
        <PrimaryButton label="Add item (mock)" onPress={() => {}} disabled />
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
  list: {
    paddingBottom: spacing.lg,
    flexGrow: 1,
  },
});
