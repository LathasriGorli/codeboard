import { createFileRoute } from '@tanstack/react-router'
import { LocationName } from '~/components/Card/LocationName'

export const Route = createFileRoute('/card/location-name')({
  component: LocationName,
})
