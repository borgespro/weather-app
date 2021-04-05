import styled from 'styled-components/native';

import { CustomThemeProps } from '@/typings/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: CustomThemeProps) => props.theme.colors.background};
`;

export const Content = styled.View``;
