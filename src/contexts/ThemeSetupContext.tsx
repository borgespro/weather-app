import React, { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

import { DefaultTheme } from 'styled-components/native';

import { CustomThemeType } from '@/typings/theme';

import { darkTheme, lightTheme } from '@/ui/themes';

export type ThemeSetup = {
  currentThemeType: CustomThemeType;
  currentTheme: DefaultTheme;
  toggleCurrentTheme: () => void;
};

const defaultThemeSetup = {
  currentThemeType: 'dark' as CustomThemeType,
  currentTheme: darkTheme,
  toggleCurrentTheme: () => console.log('toggleCurrentTheme not initialized.'),
};

export type ThemeSetupProviderProps = {};

const ThemeSetupContext = createContext<ThemeSetup>(defaultThemeSetup);

export function ThemeSetupProvider({ children }: PropsWithChildren<ThemeSetupProviderProps>): React.ReactElement {
  const availableThemes = {
    light: lightTheme,
    dark: darkTheme,
  };

  const [currentThemeType, setCurrentThemeType] = useState<CustomThemeType>('dark');

  const toggleCurrentTheme = useCallback(() => {
    if (currentThemeType === 'dark') {
      setCurrentThemeType('light');
    } else {
      setCurrentThemeType('dark');
    }
  }, [currentThemeType]);

  const currentTheme = useMemo(() => availableThemes[currentThemeType], [currentThemeType]);

  return (
    <ThemeSetupContext.Provider value={{ currentThemeType, currentTheme, toggleCurrentTheme }}>
      {children}
    </ThemeSetupContext.Provider>
  );
}

export const useThemeSetupContext = (): ThemeSetup => useContext<ThemeSetup>(ThemeSetupContext);

export const ThemeSetupConsumer = ThemeSetupContext.Consumer;

export default ThemeSetupContext;
