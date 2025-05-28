import { createFileRoute } from '@tanstack/react-router'
import { appointmentTable } from '~/components/testing/AppointmentTable'

export const Route = createFileRoute('/testing/appointment-table')({
  component: appointmentTable,
})
