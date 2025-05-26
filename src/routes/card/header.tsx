import { createFileRoute } from '@tanstack/react-router'
import { Header } from '~/components/Card/Header'

export const Route = createFileRoute('/card/header')({
  component: Header,
})
