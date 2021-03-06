import { ThemeProps } from 'styled-components';

import { lightTheme, darkTheme } from '../ui/themes';

export type CustomThemeType = 'dark' | 'light';

export type CustomTheme = typeof darkTheme & typeof lightTheme;
export type CustomThemeProps = ThemeProps<CustomTheme>;
