import { createFileRoute } from '@tanstack/react-router'
import { Profile } from '~/components/Profile/ViewProfile';

export const Route = createFileRoute('/profile/view-profile')({
      component: Profile,
})
