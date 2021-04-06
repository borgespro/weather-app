import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import { ThemeSetupConsumer, ThemeSetupProvider } from '@/contexts/ThemeSetupContext';

import InfoDisplay from '@/ui/screens/InfoDisplay';

export default function AppConfig(): React.ReactElement {
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
