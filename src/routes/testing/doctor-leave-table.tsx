import { createFileRoute } from '@tanstack/react-router'
import { DoctorLeaveTable } from '~/components/testing/DoctorLeaveTable'

export const Route = createFileRoute('/testing/doctor-leave-table')({
  component: DoctorLeaveTable,
})
