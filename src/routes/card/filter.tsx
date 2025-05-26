import { createFileRoute } from '@tanstack/react-router'
import { Filter } from '~/components/Card/Filter'

export const Route = createFileRoute('/card/filter')({
  component: Filter,
})
