import type { ShortcutItemData } from '@/src/types/shortcuts';

/**
 * Shortcut tiles — swap `assets/shortcuts/*.png` with PNG exports from Figma node 70114-78271
 * (Consumer file hTmBFTYdlynOcGtxFnHIbM) to match design imagery exactly.
 */
export const homeShortcuts: ShortcutItemData[] = [
  { id: 's1', label: 'Deals', image: require('../../assets/shortcuts/shortcut-deals.png') },
  { id: 's2', label: 'Reorder', image: require('../../assets/shortcuts/shortcut-reorder.png') },
  { id: 's3', label: 'Shops', image: require('../../assets/shortcuts/shortcut-shops.png') },
  { id: 's4', label: 'Offers', image: require('../../assets/shortcuts/shortcut-offers.png') },
  { id: 's5', label: 'Rewards', image: require('../../assets/shortcuts/shortcut-reorder.png') },
  { id: 's6', label: 'History', image: require('../../assets/shortcuts/shortcut-offers.png') },
];
