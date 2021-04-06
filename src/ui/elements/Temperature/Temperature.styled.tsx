import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const CustomText = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.typography.sizes.xxxl};
  font-family: ${(props) => props.theme.typography.fonts.montserrat?.medium};
`;
