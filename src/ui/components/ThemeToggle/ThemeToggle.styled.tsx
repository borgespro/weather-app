import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const ThemeToggleContainer = styled.View<CustomThemeProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-horizontal: ${(props) => props.theme.spacing.xxl};
  padding-vertical: ${(props) => props.theme.spacing.xl};
`;
