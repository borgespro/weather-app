import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { ButtonComponent, ButtonLabel } from './Button.styled';

type ButtonProps = {
  label: string;
  onPress: (event?: GestureResponderEvent) => void;
  active?: boolean;
};

export default function Button({ label, active, onPress }: ButtonProps): React.ReactElement {
  return (
    <ButtonComponent active={!!active} onPress={onPress}>
      <ButtonLabel active={!!active}>{label}</ButtonLabel>
    </ButtonComponent>
  );
}
