import type { ImageSourcePropType } from 'react-native';

export type ShortcutItemData = {
  id: string;
  label: string;
  /** Raster from Figma export — replace files under assets/shortcuts for 1:1 design parity. */
  image: ImageSourcePropType;
  onPress?: () => void;
};
