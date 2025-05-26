import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '~/components/Card/DoctorTable'

export const Route = createFileRoute('/card/doctor-table')({
  component: () => <DataTable />,
})
