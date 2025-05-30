const locations = [
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "General Practitioner",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "Dammam",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "Jubail",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "AMC Jubail",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "Hofuf",
  },
];
export function specialities() {
  return (
    <div className="flex items-start p-2 rounded-lg border border-[#E1E1E1] bg-white">
      <div className="flex flex-col gap-4">
        <p className="text-[#005669] font-(family-name:--an-specialities-font-family) text-sm font-medium">
          Hospitals
        </p>
        <span className="text-[#828282] font-(family-name:--an-specialities-font-family) text-xs font-normal">
          Please Select the Hospital they work in
        </span>
        {locations.map((item) => (
          <div className="flex gap-2 items-center rounded-lg">
            <img
              src={item.img}
              alt=""
              className="w-7 h-7 rounded-sm"
            />
            <p className="text-[#020202] font-(family-name:--an-specialities-font-family) text-xs font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
