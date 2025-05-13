import { createFileRoute } from '@tanstack/react-router'
import { RecentCommitTable } from '~/components/Table/RecentCommitTable'

export const Route = createFileRoute('/table/recent-commit-table')({
  component: () => <RecentCommitTable />,
})

