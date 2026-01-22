import type{Session,User} from '@supabase/supabase-js'
import {supabase} from './supabase'
import { subscribe } from 'node:diagnostics_channel';

type AuthState = {ready:boolean;
    session: Session | null; user:User | null
}

let state: AuthState = {ready: false, session:null,user:null}

const listeners = new Set<(s: AuthState) => void>()

const emit = () => listeners.forEach((l) =>l(state))

export const auth = {
    getState: () => state,
    subscribe: (fn: (s:AuthState)=> void) => {
        listeners.add(fn)
        return () => listeners.delete(fn)
    },
    init: async () => {
        const{data} =await supabase.auth.getSession()
        state = { ready : true, session: data.session ?? null, user:
            data.session?.user ?? null }
            emit()


            supabase.auth.onAuthStateChange((_event,session) => {
                state = {ready:true, session:session ?? null , user: session?.user ?? null}
            })
        },
    
}