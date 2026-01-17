import { AuthenticationTitle } from '@/components/login/AuthenticationTitle';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <AuthenticationTitle />
      <ColorSchemeToggle />
    </>
  );
}
