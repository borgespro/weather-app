import React from 'react';

import { useThemeSetupContext } from '@/contexts/ThemeSetupContext';

import Button from '@/ui/elements/Button';

import { ThemeToggleContainer } from './ThemeToggle.styled';

export default function ThemeToggle(): React.ReactElement {
  const { currentThemeType, toggleCurrentTheme } = useThemeSetupContext();

  return (
    <ThemeToggleContainer>
      <Button label="Light" onPress={toggleCurrentTheme} active={currentThemeType === 'light'} />
      <Button label="Dark" onPress={toggleCurrentTheme} active={currentThemeType === 'dark'} />
    </ThemeToggleContainer>
  );
}
