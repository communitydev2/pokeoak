import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landingpage')({
  component: LandingPage,
})

export function LandingPage() {
  return <div className="p-2">Hello from Landing PAge!</div>
}

// ^ display cards in main menu by the amount of wishlists on players cards