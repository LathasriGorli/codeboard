import { createFileRoute } from '@tanstack/react-router'
import { NoLocation } from '~/components/NoCards/NoLocation'

export const Route = createFileRoute('/nocards/no-location')({
  component: NoLocation,
})
