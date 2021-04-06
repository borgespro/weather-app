import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const InfoDisplayContainer = styled.View<CustomThemeProps>`
  justify-content: center;
  align-items: center;
  padding-vertical: ${(props) => props.theme.spacing.s};
  padding-horizontal: ${(props) => props.theme.spacing.s};
  margin-top: ${(props) => props.theme.spacing.s};
  height: 85%;
`;
