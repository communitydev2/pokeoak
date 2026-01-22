import '@mantine/core/styles.css';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
const queryClient = new QueryClient({
  defaultOptions : {queries: {staleTime: 1000 * 60 * 5}},
})
export default function App() {
  return (
   
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
    </QueryClientProvider>

  );
}
