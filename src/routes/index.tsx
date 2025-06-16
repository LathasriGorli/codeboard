import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2 flex flex-col items-start">
      <button onClick={() => window.location.href = 'testing/login'}>Login</button>
      <ul>
        <p>Tables</p>
        <li><button onClick={() => window.location.href = 'testing/appointment-table'}>Appointments</button></li>
        <li><button onClick={() => window.location.href = 'testing/locations'}>Locations</button></li>
        <li><button onClick={() => window.location.href = 'testing/table'}>specialization</button></li>
        <li><button onClick={() => window.location.href = 'testing/doctor-leave-table'}>Doctor Leave Management</button></li>
      </ul>
      <button onClick={() => window.location.href = 'testing/sidebar'}>Sidebar</button>
      <button onClick={() => window.location.href = 'card/doctors/doctors-cards'}>Doctors Card</button>
      <button onClick={() => window.location.href = 'card/doctors/personal-details'}>Doctor Personal Details</button>
      <button onClick={() => window.location.href = 'card/doctors/specialities'}>Doctor Specialities</button>
      <button onClick={() => window.location.href = 'card/appointment-screen'}>Appointments view Screen</button>
      <button onClick={() => window.location.href = 'card/doctor-leave'}>Dcotor Leave</button>
      <button onClick={() => window.location.href = 'card/doctor-table'}>Data Table</button>
      <button onClick={() => window.location.href = 'card/location-name'}>Location Name</button>
    </div>
  )
}
