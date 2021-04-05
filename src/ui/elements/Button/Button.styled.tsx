import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

type InnerComponentsProps = {
  active: boolean;
};

export const ButtonComponent = styled.TouchableOpacity<CustomThemeProps & InnerComponentsProps>`
  min-width: ${(props) => props.theme.spacing.xxxl};
  border-width: 1px;
  border-radius: ${(props) => props.theme.spacing.m};
  border-color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => (props.active ? props.theme.colors.secondary : props.theme.colors.background)};
`;

export const ButtonLabel = styled.Text<CustomThemeProps & InnerComponentsProps>`
  font-weight: bold;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.secondary)};
  padding-vertical: ${(props) => props.theme.spacing.xxs};
  padding-horizontal: ${(props) => props.theme.spacing.l};
`;
