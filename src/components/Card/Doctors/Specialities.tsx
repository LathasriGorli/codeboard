import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
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

const SpecialitiesData = [
  "General Practitioner",
  "OB/GYN",
  "Dermatology",
  "Psychiatry",
  "ENT",
  "Cardiology",
  "Oncology",
  "Urology",
  "Paediatrics",
  "Gastroenterology",
  "Neurology",
  "Diabetology",
  "Orthopaedics",
  "Endocrinology",
  "Imaging Science",
  "Radiological Services",
  "Advanced Imaging Techniques",
  "Radiation Therapy",
  "Medical Imaging",
  "Radiology Consultation",
  "Interventional Radiology",
  "Pediatric Radiology",
  "Family Medicine",
  "Women Health Specialist",
  "Skin Health and Wellness",
  "Ear, Nose and Throat Care",
  "Heart Health and Vascular Care",
  "Cancer Care and Treatment",
  "Men Health and Urological Services",
  "Child Health and Development",
  "Digestive Health",
  "Brain and Nerve Care",
  "Hormonal Health",
  "Diabetes Management",
  "Bone and Joint Care",
  "Diagnostic Imaging",
  "Emergency Radiology",
  "Nuclear Medicine",
  "Radiology Research",
  "Tele-radiology Services",
];

export function Specialities() {
  const [selectedSpecialities, setSelectedSpecialities] = useState<Set<string>>(
    new Set()
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHospitals, setSelectedHospitals] = useState(locations[0].id);

  const handleCheckboxChange = (speciality: string, checked: boolean) => {
    setSelectedSpecialities((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(speciality);
      } else {
        newSet.delete(speciality);
      }
      return newSet;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const filteredSpecialities = SpecialitiesData.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const midPoint = Math.ceil(filteredSpecialities.length / 2);
  const leftColumn = filteredSpecialities.slice(0, midPoint);
  const rightColumn = filteredSpecialities.slice(midPoint);

  return (
    <div className="flex flex-col sm:flex-row items-start p-3 pb-6 rounded-lg border border-(--an-specialities-border-color) bg-white gap-4 font-(family-name:--an-font-family) h-[calc(100vh-145px)]">
      <div className="flex flex-col gap-3 w-full sm:w-52">
        <p className="text-(--an-specialities-title-color) text-(length:--an-specialities-title-size) font-(--an-specialities-font-weight)">Hospitals</p>
        <span className="text-(--an-specialities-profile-color) text-(length:--an-specialities-text-size) font-normal">
          Please select the hospital they work in
        </span>
        <Tabs value={selectedHospitals} onValueChange={setSelectedHospitals} className="w-full mt-18">
          <TabsList className="flex flex-col items-start w-full gap-2 bg-hidden shadow-none">
            {locations.map((location) => (
              <TabsTrigger
              key={location.id}
              value={location.id}
              className="w-full justify-start text-(--an-specialities-tabs-color) text-(length:--an-specialities-text-size) font-(--an-specialities-font-weight) data-[state=active]:text-(--an-specialities-activetabs-color) data-[state=active]:bg-(--an-specialities-activetabs-bg) data-[state=active]:border-(--an-specialities-activetabs-border) flex items-center gap-2 rounded"
            >
              <Avatar className="h-6 w-6 rounded">
                <AvatarImage src={location.img} />
                <AvatarFallback />
              </Avatar>
              <span>{location.name}</span>
            </TabsTrigger> 
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="border-l border-(--an-specialities-checkbox-border-color) h-[102%] hidden sm:block"></div>

     <div className="flex flex-col gap-3 w-full sm:w-[58rem]">
        <p className="text-(--an-specialities-title-color) text-(length:--an-specialities-title-size) font-(--an-specialities-font-weight)">Specialities</p>
        <div className="flex items-center border w-full sm:w-[28rem] h-7 pl-1 rounded-lg">
          <SearchIcon className="w-4 h-4" />
          <Input
            type="search"
            placeholder="Search specialities..."
            className="border-none h-7 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search specialities"
          />
        </div>
        <ScrollArea className="h-[calc(100vh-290px)]">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 text-(--an-specialities-title-color) space-y-2">
            <Checkbox
              id="all-specialities"
              checked={
                selectedSpecialities.size === filteredSpecialities.length
              }
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedSpecialities(new Set(filteredSpecialities));
                } else {
                  setSelectedSpecialities(new Set());
                }
              }}
              className="shadow-none border border-(--an-specialities-checkbox-border-color)"
            />
            <label htmlFor="all-specialities" className="text-(length:--an-specialities-text-size) font-normal">
              Select All
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              {leftColumn.map((item, index) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox
                    id={`speciality-${item}`}
                    checked={selectedSpecialities.has(item)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(item, !!checked)
                    }
                    className="shadow-none border border-(--an-specialities-checkbox-border-color)"
                  />
                  <label
                    htmlFor={`speciality-${item}`}
                    className="text-(length:--an-specialities-text-size) font-normal"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {rightColumn.map((item, index) => (
                <div key={item} className="flex items-center space-x-2">
                  <Checkbox
                    id={`speciality-${item}`}
                    checked={selectedSpecialities.has(item)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(item, !!checked)
                    }
                    className="shadow-none border border-(--an-specialities-checkbox-border-color)"
                  />
                  <label
                    htmlFor={`speciality-${item}`}
                    className="text-(length:--an-specialities-text-size) font-normal"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
        </ScrollArea>
      </div>
    </div>
  );
}
