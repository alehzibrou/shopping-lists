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

/**
 * Figma order-again (70121:70105): root is `py-12` + `gap-16` only; `px-24` is on
 * Header (70475) and Provider row (70156) separately — not on the outer wrapper.
 */
export const orderAgainLayout = {
  horizontalPadding: 24,
  verticalPadding: 12,
  headerToRowGap: 16,
  titleRowGap: 12,
  itemGap: 12,
  thumbSize: 86,
  thumbRadius: 12,
  labelGap: 4,
  /** [Header] Meta Header M — "All" + chevron (70121:70487) */
  metaHeaderWidth: 40,
  metaHeaderHeight: 25,
  metaHeaderPaddingTop: 5,
  allLinkGap: 4,
  allLinkRadius: 4,
} as const;
