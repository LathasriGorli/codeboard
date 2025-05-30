import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

const locations = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "General Practitioner",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "Dammam",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "Jubail",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "AMC Jubail",
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8&w=1000&q=80",
    name: "Hofuf",
  },
];

const SpecialitiesData = ['General Practitioner','OB/GYN','Dermatology','Psychiatry','ENT','Cardiology','Oncology','Urology','Paediatrics','Gastroenterology','Neurology','Diabetology','Orthopaedics','Endocrinology','Imaging Science','Radiological Services','Advanced Imaging Techniques','Radiation Therapy','Medical Imaging',
  'Radiology Consultation','Interventional Radiology','Pediatric Radiology','Family Medicine','Women Health Specialist','Skin Health and Wellness','Ear, Nose and Throat Care','Heart Health and Vascular Care','Cancer Care and Treatment','Men Health and Urological Services','Child Health and Development','Digestive Health','Brain and Nerve Care','Hormonal Health','Diabetes Management','Bone and Joint Care',
  'Diagnostic Imaging','Emergency Radiology','Nuclear Medicine','Radiology Research','Tele-radiology Services','Radiology Education','Radiology Quality Assurance','Radiology Innovations'
];

export function Specialities() {
  return (
    <div className="flex items-start p-2 rounded-lg border border-[#E1E1E1] bg-white gap-4">
      <div className="flex flex-col gap-4">
        <p className="text-[#005669] text-sm font-medium">Hospitals</p>
        <span className="text-[#828282] text-xs font-normal">
          Please select the hospital they work in
        </span>

        <Tabs defaultValue={locations[0].id}>
          <TabsList className="flex flex-col gap-2 items-center rounded-lg border">
            {locations.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="flex gap-2 items-center"
              >
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.name}
                  className="w-7 h-7 rounded-sm object-cover"
                />
                <p className="text-[#020202] font-medium text-xs">
                  {item.name}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="border-l border-gray-200 h-full ml-6"></div>

      <div className="flex flex-col gap-3">
      <p className="text-[#005669] text-sm font-medium">Personal Details</p>
      <Input type="search" placeholder="Search properties"className="w-120 h-7"/>
      <div className="flex flex-col w-[300px] h-140">
        {SpecialitiesData.map((item) => (
          <div className="flex items-center space-x-2">
          <Checkbox id="" />
          <label
            htmlFor=""
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item}
          </label>
        </div>    
        ))}
      </div>l
      </div>
    </div>
  );
}
