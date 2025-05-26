import { createFileRoute } from '@tanstack/react-router'
import { Login } from '~/components/Card/Login'

export const Route = createFileRoute('/card/login')({
  component: Login,
})
