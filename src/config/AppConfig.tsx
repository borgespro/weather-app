import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components/native';

import InfoDisplay from '@/ui/screens/InfoDisplay';
import { darkTheme } from '@/ui/themes';

export default function AppConfig(): React.ReactElement {
  return (
    <ThemeProvider theme={darkTheme as DefaultTheme}>
      <InfoDisplay />
    </ThemeProvider>
  );
}
