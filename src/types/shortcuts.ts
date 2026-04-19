import type { ImageResizeMode, ImageSourcePropType } from 'react-native';

export type ShortcutItemData = {
  id: string;
  label: string;
  /**
   * Figma MCP serves rasters at `http://localhost:3845/assets/...` while the desktop server runs.
   * Replace with bundled `require()` assets for offline/production if needed.
   */
  image: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  onPress?: () => void;
};
