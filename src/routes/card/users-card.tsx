import { createFileRoute } from '@tanstack/react-router'
import { UsersCard } from '~/components/Card/UsersCard'

export const Route = createFileRoute('/card/users-card')({
  component: UsersCard,
})
