// import dotenv from "dotenv/config";
import path from 'path';
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
import { supabase } from '@/client';
import { useState } from 'react';

export const Route = createFileRoute('/signUp')({
  component: SignUp,
})





export function SignUp() {
  
  
  
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function signUpNewUser(e) {
    e.preventDefault();
    
    // const { error } = await supabase
    // .from('player_account')
    // .insert({
      //   username: "test",
      //   password: 'example-password',
      //   discord_id : "",
      //   email: 'valid.email@supabase.io',
      //   email_updates: false,
      //   show_discord_id:false
      
      
      
      // })
      // try{

        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options:{
            emailRedirectTo:"http://localhost:8888/landingpage"
          }
         
        })
        
      // } catch (error){
      //   alert(error)
      // }
}



  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        
        
        Sign Up
      </Title>


      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput value={username} label="Username" placeholder="you@email.com" required radius="md" onChange={(event)=>setUsername(event?.currentTarget.value)} />
        <TextInput value={email} label="Email" placeholder="you@email.com" required radius="md" onChange={(event)=>setEmail(event?.currentTarget.value)} />
        <PasswordInput value={password} label="Password" placeholder="Your password" required radius="md" onChange={(event)=>setPassword(event?.currentTarget.value)}/>
        <Button fullWidth mt="xl" radius="md" onClick={signUpNewUser} >
          
    Confirm your email
        </Button>
      </Paper>
    </Container>
  );
}