import type { ShoppingItem, ShoppingListSummary } from '@/src/types/shoppingList';

export const mockLists: ShoppingListSummary[] = [
  { id: '1', name: 'Weekend groceries', itemCount: 6 },
  { id: '2', name: 'Party snacks', itemCount: 4 },
];

const itemsByListId: Record<string, ShoppingItem[]> = {
  '1': [
    { id: 'a', name: 'Milk', checked: true },
    { id: 'b', name: 'Eggs', checked: false },
    { id: 'c', name: 'Bread', checked: false },
    { id: 'd', name: 'Butter', checked: true },
    { id: 'e', name: 'Coffee', checked: false },
    { id: 'f', name: 'Bananas', checked: false },
  ],
  '2': [
    { id: 'g', name: 'Chips', checked: false },
    { id: 'h', name: 'Salsa', checked: false },
    { id: 'i', name: 'Olives', checked: true },
    { id: 'j', name: 'Sparkling water', checked: false },
  ],
};

export function getItemsForList(listId: string): ShoppingItem[] {
  return itemsByListId[listId] ?? [];
}
