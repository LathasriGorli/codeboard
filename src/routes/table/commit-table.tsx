import { createFileRoute } from '@tanstack/react-router'
import { CommitTable } from '~/components/Table/CommitTable'

export const Route = createFileRoute('/table/commit-table')({
  component: () => <CommitTable />,
})
