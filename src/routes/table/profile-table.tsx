import { createFileRoute } from '@tanstack/react-router'
import { ProfileTable } from '~/components/Table/ProfileTable'

export const Route = createFileRoute('/table/profile-table')({
  component: () => <ProfileTable />,
})
