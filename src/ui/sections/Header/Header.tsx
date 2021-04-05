import React from 'react';

import SunIcon from '@/ui/elements/SunIcon';

import { AppTitle, HeaderContainer, HeaderContent } from './Header.styled';

export default function Header(): React.ReactElement {
  return (
    <HeaderContainer testID="headerContainer">
      <HeaderContent>
        <SunIcon />
        <AppTitle>WeatherApp</AppTitle>
      </HeaderContent>
    </HeaderContainer>
  );
}
