import { AuthenticationTitle } from '@/routes/authenticationTitle';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { SignUp } from '@/routes/signUp';

export function HomePage() {
  return (
    <>
      <SignUp />
      <ColorSchemeToggle />
    </>
  );
}
