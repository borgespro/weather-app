import React from 'react';

import Button from '@/ui/elements/Button';

import { FooterContainer, FooterContent } from './Footer.styled';

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer testID="footerContainer">
      <FooterContent>
        <Button label="Light" onPress={() => console.log('Light')} />
        <Button label="Dark" onPress={() => console.log('Dark')} active />
      </FooterContent>
    </FooterContainer>
  );
}
