import React, { PropsWithChildren } from 'react';

import Footer from '@/ui/sections/Footer';
import Header from '@/ui/sections/Header';

import { Content, Wrapper } from './AppTemplate.styled';

type AppTemplateProps = {};

export default function AppTemplate({ children }: PropsWithChildren<AppTemplateProps>): React.ReactElement {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}
