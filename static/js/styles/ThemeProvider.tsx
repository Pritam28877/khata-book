import React, { memo } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from 'src/styles/theme';

interface IThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: IThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default memo(ThemeProvider);
