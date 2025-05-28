import { createFileRoute } from '@tanstack/react-router'
import { DoctorLeave } from '~/components/Card/DoctorLeave'

export const Route = createFileRoute('/card/doctor-leave')({
  component: DoctorLeave,
})

