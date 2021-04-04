import React, { PropsWithChildren } from 'react';

import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

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
