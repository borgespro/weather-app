import React from 'react';

import ThemeToggle from '@/ui/components/ThemeToggle';

import { FooterContainer } from './Footer.styled';

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer testID="footerContainer">
      <ThemeToggle />
    </FooterContainer>
  );
}
