import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import { AppText, ScreenContainer } from '@/src/components';
import { spacing } from '@/src/theme/spacing';

export default function ModalScreen() {
  return (
    <ScreenContainer edges={['top', 'bottom', 'left', 'right']}>
      <View style={styles.block}>
        <AppText variant="title">Prototype</AppText>
        <AppText variant="body" style={styles.para}>
          This is a lightweight Expo web build for usability tests. Lists and items are mocked locally;
          tokens live under src/theme for a future Figma sync.
        </AppText>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: spacing.md,
    maxWidth: 520,
    alignSelf: 'center',
  },
  para: {
    lineHeight: 22,
  },
});
