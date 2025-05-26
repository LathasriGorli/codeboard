import { createFileRoute } from '@tanstack/react-router'
import { Table } from '~/components/testing/Table'

export const Route = createFileRoute('/testing/table')({
  component: () => <Table />,
})
