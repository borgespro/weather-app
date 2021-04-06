import React from 'react';

import {
  useFonts,
  Montserrat_700Bold as Montserrat700Bold,
  Montserrat_600SemiBold as Montserrat600SemiBold,
  Montserrat_500Medium as Montserrat500Medium,
} from '@expo-google-fonts/montserrat';
import { ThemeProvider } from 'styled-components/native';

import { ThemeSetupConsumer, ThemeSetupProvider } from '@/contexts/ThemeSetupContext';

import InfoDisplay from '@/ui/screens/InfoDisplay';

export default function AppConfig(): React.ReactElement {
  useFonts({
    Montserrat700Bold,
    Montserrat600SemiBold,
    Montserrat500Medium,
  });

  return (
    <ThemeSetupProvider>
      <ThemeSetupConsumer>
        {({ currentTheme }) => (
          <ThemeProvider theme={currentTheme}>
            <InfoDisplay />
          </ThemeProvider>
        )}
      </ThemeSetupConsumer>
    </ThemeSetupProvider>
  );
}
