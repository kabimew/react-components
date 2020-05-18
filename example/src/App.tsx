import React, { FC } from 'react';
import { Input } from './reactComponentLib';
import { ThemeProvider } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Input bgcolor="white" />
    </ThemeProvider>
  );
};
