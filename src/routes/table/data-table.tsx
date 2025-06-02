import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '~/components/Card/DoctorTable'

export const Route = createFileRoute('/table/data-table')({
  component: () => <DataTable />,
})
