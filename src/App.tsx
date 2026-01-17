import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router.js';
import { theme } from './theme.js';

// src/app.tsx


export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
