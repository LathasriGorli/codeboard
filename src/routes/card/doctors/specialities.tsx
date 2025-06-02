import { createFileRoute } from '@tanstack/react-router'
import { Specialities } from '~/components/Card/Doctors/Specialities'

export const Route = createFileRoute('/card/doctors/specialities')({
  component: Specialities,
})
