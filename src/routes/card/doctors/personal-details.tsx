import { createFileRoute } from '@tanstack/react-router'
import { PersonalDetails } from '~/components/Card/Doctors/PersonalDetails'

export const Route = createFileRoute('/card/doctors/personal-details')({
  component: PersonalDetails,
})