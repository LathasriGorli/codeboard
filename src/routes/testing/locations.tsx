import { createFileRoute } from '@tanstack/react-router'
import { Locations } from '~/components/testing/Locations'

export const Route = createFileRoute('/testing/locations')({
  component: () => <Locations />,
})
