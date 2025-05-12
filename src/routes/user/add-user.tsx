import { createFileRoute } from '@tanstack/react-router'
import { CardWithAddUser } from '~/components/User/AddUser'
export const Route = createFileRoute('/user/add-user')({
  component: ()=><CardWithAddUser/>
})

