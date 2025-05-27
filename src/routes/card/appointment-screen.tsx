import { createFileRoute } from '@tanstack/react-router'
import { AppointmentScreen } from '~/components/Card/AppointmentScreen'

export const Route = createFileRoute('/card/appointment-screen')({
  component: AppointmentScreen,
})
