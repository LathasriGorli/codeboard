import AddNewButton from "../Card/AddNew";

export function NoAppointment() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 font-[urbanist] text-sm font-medium text-[#4F4F4F]">
        <img
          src="/src/components/icons/NoCard/No Appointment.png"
          alt="locations"
          className="w-50"
        />
        <p className="text-center pb-3">
          No appointments yet.
          <br />
          Click "Add Appointment" to begin.
        </p>
        <AddNewButton />
      </div>
    </div>
  );
}