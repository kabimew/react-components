import React, { FC } from 'react';
import { Input, Button } from './reactComponentLib';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Input backgroundColor="secondary" />
      <Button color="primary" size="small">
        button
      </Button>
      <Button color="secondary" size="medium">
        button
      </Button>
    </ThemeProvider>
  );
};
