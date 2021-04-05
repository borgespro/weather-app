import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const SunIconContainer = styled.View`
  justify-content: center;
  padding-right: ${(props: CustomThemeProps) => props.theme.spacing.xxs};
`;
export const SunIconImg = styled.Image`
  width: ${(props: CustomThemeProps) => props.theme.spacing.xl};
  height: ${(props: CustomThemeProps) => props.theme.spacing.xl};
`;
