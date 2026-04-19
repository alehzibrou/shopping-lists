import { TextStyle } from 'react-native';

/** Typography presets — map to Figma text styles. */
export const typography = {
  title: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: -0.3,
  } satisfies TextStyle,
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
  } satisfies TextStyle,
  body: {
    fontSize: 16,
    fontWeight: '400',
  } satisfies TextStyle,
  caption: {
    fontSize: 13,
    fontWeight: '400',
  } satisfies TextStyle,
} as const;
