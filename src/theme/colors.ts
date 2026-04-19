/**
 * Design tokens — replace values with Figma variables when syncing the file.
 */
export const palette = {
  primary: '#2563EB',
  primaryPressed: '#1D4ED8',
  surface: '#FFFFFF',
  surfaceMuted: '#F4F4F5',
  border: '#E4E4E7',
  text: '#18181B',
  textMuted: '#71717A',
  /** Consumer / Figma — content primary (Body S on shortcuts). */
  contentPrimary: '#191F1C',
  /** Figma token bg/neutral-secondary */
  shortcutIconBg: 'rgba(0, 45, 30, 0.07)',
  danger: '#DC2626',
  success: '#16A34A',
} as const;

export const paletteDark = {
  primary: '#60A5FA',
  primaryPressed: '#3B82F6',
  surface: '#09090B',
  surfaceMuted: '#18181B',
  border: '#27272A',
  text: '#FAFAFA',
  textMuted: '#A1A1AA',
  contentPrimary: '#F2F4F3',
  shortcutIconBg: 'rgba(255, 255, 255, 0.1)',
  danger: '#F87171',
  success: '#4ADE80',
} as const;

/** Navigation + legacy `Themed` keys */
export const navigationColors = {
  light: {
    text: palette.text,
    background: palette.surface,
    tint: palette.primary,
    tabIconDefault: palette.textMuted,
    tabIconSelected: palette.primary,
  },
  dark: {
    text: paletteDark.text,
    background: paletteDark.surface,
    tint: paletteDark.primary,
    tabIconDefault: paletteDark.textMuted,
    tabIconSelected: paletteDark.primary,
  },
} as const;

export type ColorScheme = 'light' | 'dark';
