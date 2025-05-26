import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2 flex flex-col items-start">
      <button onClick={() => window.location.href = 'testing/table'}>Table</button>
      <button onClick={() => window.location.href = 'testing/sidebar'}>Sidebar</button>
      <button onClick={() => window.location.href = 'testing/login'}>Login</button>
    </div>
  )
}
