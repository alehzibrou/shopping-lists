import type { ImageSourcePropType } from 'react-native';

export type OrderAgainItemData = {
  id: string;
  /** Merchant or dish line */
  line1: string;
  /** Location line */
  line2: string;
  /** Figma MCP asset while desktop server runs */
  image: ImageSourcePropType;
  onPress?: () => void;
};
