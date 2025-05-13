import { createFileRoute } from '@tanstack/react-router'
import { CardWithLogin4 } from '~/components/Login/LoginUser'
export const Route = createFileRoute('/login/login-user')({
  component: ()=> <CardWithLogin4/>
})

