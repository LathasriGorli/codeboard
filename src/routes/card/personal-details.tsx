import { createFileRoute } from '@tanstack/react-router'
import { PersonalDetails } from '~/components/Card/PersonalDetails'

export const Route = createFileRoute('/card/personal-details')({
  component: PersonalDetails,
})