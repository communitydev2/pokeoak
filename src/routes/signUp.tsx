import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from '../assets/css/AuthenticationTitle.module.css';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signUp')({
  component: SignUp,
})

export function SignUp() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        
        
        Sign Up
      </Title>


      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput label="Username" placeholder="Enter username" required radius="md" />
        <PasswordInput label="Password" placeholder="Your password" required radius="md" />
        <TextInput label="Email" placeholder="you@email.com" required radius="md" />
            <a
    href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next={{ .RedirectTo }}">
        <Button fullWidth mt="xl" radius="md">
          
    Confirm your email
        </Button>
        </a>
      </Paper>
    </Container>
  );
}