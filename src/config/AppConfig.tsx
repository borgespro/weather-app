import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components/native';

import { darkTheme } from '../ui/themes';
import InfoDisplay from '../ui/screens/InfoDisplay';

export default function AppConfig(): React.ReactNode {
  return (
    <ThemeProvider theme={darkTheme as DefaultTheme}>
      <InfoDisplay />
    </ThemeProvider>
  );
}
