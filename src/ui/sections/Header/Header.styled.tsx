import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const HeaderContainer = styled.View`
  margin-vertical: ${(props: CustomThemeProps) => props.theme.spacing.xxs};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderContent = styled.View`
  padding-horizontal: ${(props: CustomThemeProps) => props.theme.spacing.xxs};
  padding-vertical: ${(props: CustomThemeProps) => props.theme.spacing.xxs};
  flex-direction: row;
`;

export const AppTitle = styled.Text`
  color: ${(props: CustomThemeProps) => props.theme.colors.title};
  font-size: ${(props: CustomThemeProps) => props.theme.typography.sizes.xxl};
  font-weight: bold;
`;
