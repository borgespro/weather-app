import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FooterContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-horizontal: ${(props: CustomThemeProps) => props.theme.spacing.xxl};
  padding-vertical: ${(props: CustomThemeProps) => props.theme.spacing.xl};
`;
