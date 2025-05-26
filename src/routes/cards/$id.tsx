import { createFileRoute, useParams } from '@tanstack/react-router'
import { Cards } from '~/components/Cards/Cards'


export const Route = createFileRoute('/cards/$id')({
  component: Cards
})
