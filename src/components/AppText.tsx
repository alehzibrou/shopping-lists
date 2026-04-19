import { Text, TextProps } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import { palette, paletteDark } from '@/src/theme/colors';
import { typography } from '@/src/theme/typography';

type Variant = keyof typeof typography;

type Props = TextProps & {
  variant?: Variant;
  muted?: boolean;
};

export function AppText({ variant = 'body', muted, style, ...rest }: Props) {
  const scheme = useColorScheme() ?? 'light';
  const p = scheme === 'dark' ? paletteDark : palette;
  const color = muted ? p.textMuted : p.text;

  return <Text style={[typography[variant], { color }, style]} {...rest} />;
}
