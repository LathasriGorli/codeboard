import { createFileRoute } from '@tanstack/react-router'
import { Logins } from '~/components/testing/Logins'

export const Route = createFileRoute('/testing/login')({
  component: () => <Logins />,
})
