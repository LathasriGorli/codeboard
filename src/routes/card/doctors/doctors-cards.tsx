import { createFileRoute } from '@tanstack/react-router'
import { DoctorsCards } from '~/components/Card/Doctors/DoctorsCards'

export const Route = createFileRoute('/card/doctors/doctors-cards')({
  component: DoctorsCards,
})

