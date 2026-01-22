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
import { supabase } from '@/client';
import { useState,useEffect } from 'react';
import classes from '../assets/css/AuthenticationTitle.module.css';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authenticationtitle')({
  component: AuthenticationTitle,
})

export function AuthenticationTitle() {
      const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [session, setSession] = useState(null);

        // Check URL params on initial render
    const params = new URLSearchParams(window.location.search);
    const hasTokenHash = params.get("token_hash");
    const [verifying, setVerifying] = useState(!!hasTokenHash);
    const [authError, setAuthError] = useState(null);
    const [authSuccess, setAuthSuccess] = useState(false);

    useEffect(() => {
        // Check if we have token_hash in URL (magic link callback)
        const params = new URLSearchParams(window.location.search);
        const token_hash = params.get("token_hash");
        const type = params.get("type");
        if (token_hash) {
            // Verify the OTP token
            supabase.auth.verifyOtp({
                token_hash,
                type: type || "email",
            }).then(({ error }) => {
                if (error) {
                    setAuthError(error.message);
                } else {
                    setAuthSuccess(true);
                    // Clear URL params
                    window.history.replaceState({}, document.title, "/");
                }
                setVerifying(false);
            });
        }
                // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return () => subscription.unsubscribe();
    }, []);

const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: window.location.origin,
            }
        });
        if (error) {
            alert(error.error_description || error.message);
        } else {
            alert("Check your email for the login link!");
        }
        setLoading(false);
    };
    const handleLogout = async () => {
        await supabase.auth.signOut();
        setSession(null);
    };

    // Show verification state
    if (verifying) {
        return (
            <div>
                <h1>Authentication</h1>
                <p>Confirming your magic link...</p>
                <p>Loading...</p>
            </div>
        );
    }




    // Show auth error
    if (authError) {
        return (
            <div>
                <h1>Authentication</h1>
                <p>✗ Authentication failed</p>
                <p>{authError}</p>
                <button
                    onClick={() => {
                        setAuthError(null);
                        window.history.replaceState({}, document.title, "/");
                    }}
                >
                    Return to login
                </button>
            </div>
        );
    }
    // Show auth success (briefly before session loads)
    if (authSuccess && !session) {
        return (
            <div>
                <h1>Authentication</h1>
                <p>✓ Authentication successful!</p>
                <p>Loading your account...</p>
            </div>
        );
    }

    // If user is logged in, show welcome screen
    if (session) {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>You are logged in as: {session.user.email}</p>
                <button onClick={handleLogout}>
                    Sign Out
                </button>
            </div>
        );
    }



    return (
        <div>
            <h1>Supabase + React</h1>
            <p>Sign in via magic link with your email below</p>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button disabled={loading}>
                    {loading ? <span>Loading</span> : <span>Send magic link</span>}
                </button>
            </form>
        </div>
    );




  // return (
  //   <Container size={420} my={40}>
  //     <Title ta="center" className={classes.title}>
        
        
  //       Welcome back!
  //     </Title>

  //     <Text className={classes.subtitle}>
  //       Do not have an account yet? <Anchor>Create account</Anchor>
  //     </Text>

  //     <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
  //       <TextInput label="Email" placeholder="you@mantine.dev" required radius="md" />
  //       <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" />
  //       <Group justify="space-between" mt="lg">
  //         <Checkbox label="Remember me" />
  //         <Anchor component="button" size="sm">
  //           Forgot password?
  //         </Anchor>
  //       </Group>
  //       <Button fullWidth mt="xl" radius="md">
  //         Sign in
  //       </Button>
  //     </Paper>
  //   </Container>
  // );


}