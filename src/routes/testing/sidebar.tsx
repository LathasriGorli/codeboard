import { createFileRoute } from '@tanstack/react-router'
import { Sidebar } from '~/components/testing/Sidebar'

export const Route = createFileRoute('/testing/sidebar')({
  component: () => <Sidebar />,
})
