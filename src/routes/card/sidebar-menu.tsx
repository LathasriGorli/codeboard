import { createFileRoute } from '@tanstack/react-router'
import { SidebarMenu } from '~/components/Card/SidebarMenu'

export const Route = createFileRoute('/card/sidebar-menu')({
  component: () => <SidebarMenu />,
})
