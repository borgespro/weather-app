import React from 'react';

import { SunIconContainer, SunIconImg } from '@/ui/elements/SunIcon/SunIcon.styled';

export default function SunIcon(): React.ReactElement {
  return (
    <SunIconContainer>
      <SunIconImg source={require('@/assets/sun.png')} />
    </SunIconContainer>
  );
}
