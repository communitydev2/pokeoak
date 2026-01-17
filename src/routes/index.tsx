import { createFileRoute } from '@tanstack/react-router'
import { AuthenticationTitle } from './authenticationTitle'
import {SignUp} from './signUp'




export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <SignUp/>
      {/* <AuthenticationTitle/> */}
    </div>
  )
}