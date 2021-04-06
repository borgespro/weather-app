import React from 'react';

import Temperature from '@/ui/elements/Temperature/Temperature';
import AppTemplate from '@/ui/templates/AppTemplate/AppTemplate';

import { InfoDisplayContainer } from './InfoDisplay.styled';

export default function InfoDisplay(): React.ReactElement {
  return (
    <AppTemplate>
      <InfoDisplayContainer>
        <Temperature degree={34} />
      </InfoDisplayContainer>
    </AppTemplate>
  );
}
