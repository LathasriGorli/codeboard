import { createFileRoute } from '@tanstack/react-router'
import { specialities } from '~/components/Card/Doctors/Specialities'

export const Route = createFileRoute('/card/doctors/specialities')({
  component: specialities,
})
