import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { SignUp } from './signUp'
import { HeaderMegaMenu } from './HeaderMegaMenu'
import { createRootRouteWithContext } from '@tanstack/react-router'
import type{ QueryClient } from '@tanstack/react-query'
import {auth} from '../lib/auth'
import { RouterContext } from 'react-router-dom'

const RootLayout = () => (
  <>
     {/* <div className="p-2 flex gap-2">
      <Link to="/about" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      </div> */}
    {/*  <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    <hr /> */}
    <HeaderMegaMenu/>
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export type RouterContext = { queryClient: QueryClient;auth: typeof auth}

export const Route = createRootRouteWithContext<RouterContext>()({ component: ()=><Outlet/> ,})