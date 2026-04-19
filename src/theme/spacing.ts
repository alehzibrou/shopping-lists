/** Spacing scale — align steps with Figma auto-layout gaps. */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radii = {
  sm: 6,
  md: 10,
  lg: 14,
  /** Figma shortcut item outer corner */
  shortcut: 8,
  full: 9999,
} as const;

/** Figma shortcuts row (70114:78256) */
export const shortcutsLayout = {
  horizontalPadding: 24,
  verticalPadding: 12,
  itemGap: 12,
  itemWidth: 86,
  iconOuter: 72,
  iconInner: 48,
  iconPadding: 12,
  columnGap: 4,
} as const;

/** Figma order-again block (70121:70105) + thumb (70121:70450) */
export const orderAgainLayout = {
  horizontalPadding: 24,
  verticalPadding: 12,
  headerToRowGap: 16,
  titleRowGap: 12,
  itemGap: 12,
  thumbSize: 86,
  thumbRadius: 12,
  labelGap: 4,
} as const;
