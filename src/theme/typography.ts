import { TextStyle } from 'react-native';

/** Typography presets — map to Figma text styles. */
export const typography = {
  /** Figma Heading XS / SemiBold (node 70121:70478). */
  headingXs: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    letterSpacing: -0.34,
  } satisfies TextStyle,
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
  /** Figma Body S / Regular — shortcuts row labels (node 70114:78271). */
  shortcut: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: -0.084,
  } satisfies TextStyle,
  /** Figma Body S / SemiBold — e.g. "All" link (70121:70489). */
  bodySAccent: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    letterSpacing: -0.084,
  } satisfies TextStyle,
} as const;
