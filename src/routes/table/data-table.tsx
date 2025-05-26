import { createFileRoute } from '@tanstack/react-router'
import { DataTable } from '~/components/Table/DataTable'

export const Route = createFileRoute('/table/data-table')({
  component: () => <DataTable />,
})
