import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AuthenticationTitle } from './routes/authenticationtitle';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticationTitle />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
