import React, { FC } from 'react';
import { ButtonExample } from './components/ButtonExample';
import { ThemeProvider } from 'styled-components';
import { theme } from './reactComponentLib';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonExample />
    </ThemeProvider>
  );
};
