import type { ShortcutItemData } from '@/src/types/shortcuts';

const FIGMA_ASSET = (hash: string) => ({ uri: `http://localhost:3845/assets/${hash}.png` });

/**
 * Mirrors Figma node `70114:78256` (shortcuts row). Image hashes from Figma MCP `get_design_context`.
 * Requires Figma Desktop MCP server running so `localhost:3845` resolves.
 */
export const homeShortcuts: ShortcutItemData[] = [
  { id: '70114-78271', label: 'All Stores', image: FIGMA_ASSET('ec4d71433c6349cf468a21745d49c2fb269fdf1e'), resizeMode: 'contain' },
  { id: '70114-78281', label: 'Groceries', image: FIGMA_ASSET('cba844ee246f5dcc982b543f9f11dbf4bd8dfd07'), resizeMode: 'contain' },
  { id: '70114-78285', label: 'Alcohol', image: FIGMA_ASSET('218bcc3290a42a1bda832b3f8562cd5c0ccd4c84'), resizeMode: 'cover' },
  { id: '70114-78289', label: 'Ice cream', image: FIGMA_ASSET('7b7a34e0614c4f556a5b0261f513606a3557168a'), resizeMode: 'contain' },
  { id: '70114-78293', label: 'Flowers', image: FIGMA_ASSET('14ccfc26ad373706528163eabb4164b6402463e8'), resizeMode: 'contain' },
  { id: '70114-78303', label: 'Pet goods', image: FIGMA_ASSET('c8fc49f9abddaf9fa57ac970842a3da662e8506a'), resizeMode: 'contain' },
  { id: '70114-78307', label: 'Sweets', image: FIGMA_ASSET('f7378a220bc567603f67187134309dc2ea5aa387'), resizeMode: 'contain' },
  { id: '70114-78311', label: 'Bakery', image: FIGMA_ASSET('9ac7d8003425a0bad729102d0390c03948436df4'), resizeMode: 'contain' },
  { id: '70114-78315', label: 'Ready to eat', image: FIGMA_ASSET('8586aab1d1dd110a600a13b1a2ff06fe3f7adea7'), resizeMode: 'contain' },
  { id: '70114-78319', label: 'Gifts', image: FIGMA_ASSET('7390dddc418de17ef2c9dfed9cb2de7d45989500'), resizeMode: 'contain' },
  { id: '70114-78323', label: 'Toys', image: FIGMA_ASSET('c7f98909b645840b15b454af9e4576197af87ede'), resizeMode: 'contain' },
  { id: '70114-78327', label: 'Books', image: FIGMA_ASSET('619642414cd564de5d0765114d01e182eeaca0d1'), resizeMode: 'contain' },
];
