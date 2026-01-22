import { createFileRoute } from '@tanstack/react-router'
import { AuthenticationTitle } from './authenticationtitle.js'
import {SignUp} from './signUp.js'
import React, { Component } from 'react'
import {LandingPage} from './landingpage.js'
import { PokemonCard } from './pokemonCard/PokemonCard.tsx'
import type { PokemonCardtype } from '@/types/PokemonCard.js'
import { supabase } from '@/client.js'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


export const Route = createFileRoute('/')({
  component: Index,
})

//    const { isPending, error, data2 } = useQuery({
//     queryKey: ['card'],
//     queryFn: async() => {
      
//         const { data, error } = await supabase
//   .from('card')
//   .select()
//   return data;
// }
//   })


function Index() {

  return (
    <div className="p-2">
      {/* <SignUp/> */}
      {/* <SignUp/> */}
      {/* <PokemonCard card={data2[0]}/> */}
      {/* <AuthenticationTitle/> */}
    </div>
  )
}
