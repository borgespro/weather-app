import colors from './colors';
import spacing from './spacing';
import * as typography from './typography';

const baseTheme = {};

export const darkTheme = {
  ...baseTheme,
  colors: colors.dark,
  typography,
  spacing,
};
export const lightTheme = {
  ...baseTheme,
  colors: colors.light,
  typography,
  spacing,
};
