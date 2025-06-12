import AddNewButton from "../Card/AddNew";

export function NoLocation() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 font-[urbanist] text-sm font-medium text-[#4F4F4F]">
        <img
          src="/src/components/icons/NoCard/location.png"
          alt="locations"
          className="w-70"
        />
        <p className="text-center pb-3">
          No locations yet.
          <br />
          Click "Add Location" to begin.
        </p>
        <AddNewButton />
      </div>
    </div>
  );
}
