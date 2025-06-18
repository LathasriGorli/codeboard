import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

const locations = [
  {
    id: "1",
    img: "https://source.unsplash.com/random/100x100?hospital-1",
    name: "Al Noor Hospital",
  },
  {
    id: "2",
    img: "https://source.unsplash.com/random/100x100?hospital-2",
    name: "King Fahad Medical City",
  },
  {
    id: "3",
    img: "https://source.unsplash.com/random/100x100?hospital-3",
    name: "Dammam Central Hospital",
  },
  {
    id: "4",
    img: "https://source.unsplash.com/random/100x100?hospital-4",
    name: "AMC Jubail",
  },
  {
    id: "5",
    img: "https://source.unsplash.com/random/100x100?hospital-5",
    name: "Hofuf General",
  },
  {
    id: "6",
    img: "https://source.unsplash.com/random/100x100?hospital-6",
    name: "Jeddah Specialty Hospital",
  },
  {
    id: "7",
    img: "https://source.unsplash.com/random/100x100?hospital-7",
    name: "Riyadh Medical Center",
  },
  {
    id: "8",
    img: "https://source.unsplash.com/random/100x100?hospital-8",
    name: "Eastern Province Hospital",
  },
  {
    id: "9",
    img: "https://source.unsplash.com/random/100x100?hospital-9",
    name: "King Khalid Hospital",
  },
  {
    id: "10",
    img: "https://source.unsplash.com/random/100x100?hospital-10",
    name: "Buraidah Healthcare",
  },
  {
    id: "11",
    img: "https://source.unsplash.com/random/100x100?hospital-11",
    name: "Tabuk Central Hospital",
  },
  {
    id: "12",
    img: "https://source.unsplash.com/random/100x100?hospital-12",
    name: "Makkah Clinic",
  },
  {
    id: "13",
    img: "https://source.unsplash.com/random/100x100?hospital-13",
    name: "Taif Heart Center",
  },
  {
    id: "14",
    img: "https://source.unsplash.com/random/100x100?hospital-14",
    name: "Najran Women's Hospital",
  },
  {
    id: "15",
    img: "https://source.unsplash.com/random/100x100?hospital-15",
    name: "Hail Orthopedic Hospital",
  },
  {
    id: "16",
    img: "https://source.unsplash.com/random/100x100?hospital-16",
    name: "Al Qassim Medical",
  },
  {
    id: "17",
    img: "https://source.unsplash.com/random/100x100?hospital-17",
    name: "Jazan Pediatric Center",
  },
  {
    id: "18",
    img: "https://source.unsplash.com/random/100x100?hospital-18",
    name: "Al Ahsa Medical City",
  },
  {
    id: "19",
    img: "https://source.unsplash.com/random/100x100?hospital-19",
    name: "King Saud Hospital",
  },
  {
    id: "20",
    img: "https://source.unsplash.com/random/100x100?hospital-20",
    name: "Medina Heart Institute",
  },
];

const specialitiesData = [
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
  const [selectedHospitals, setSelectedHospitals] = useState(locations[0].id || "");

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

  const filteredSpecialities = specialitiesData.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const midPoint = Math.ceil(filteredSpecialities.length / 2);
  const leftColumn = filteredSpecialities.slice(0, midPoint);
  const rightColumn = filteredSpecialities.slice(midPoint);

  return (
    <div className="flex flex-col sm:flex-row items-start p-3 pb-6 rounded-lg border border-(--an-specialities-border-color) bg-white gap-4 font-(family-name:--an-font-family) h-[calc(100vh-160px)] overflow-hidden">
      <div className="flex flex-col gap-3 w-[calc(100%-1px)] sm:w-50">
        <p className="text-(--an-specialities-title-color) text-(length:--an-specialities-title-size) font-(--an-specialities-font-weight)">Hospitals</p>
        <span className="text-(--an-specialities-profile-color) text-(length:--an-specialities-text-size) font-normal">
          Please select the hospital they work in
        </span>
        <ScrollArea className="h-[calc(100vh-270px)] pr-1">
        <Tabs value={selectedHospitals} onValueChange={setSelectedHospitals} className="mt-[160%]">
          <TabsList className="flex flex-col items-start w-full gap-1 bg-transparent shadow-none">
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
        </ScrollArea>
      </div>

      <div className="border-l border-(--an-specialities-checkbox-border-color) h-[102%] hidden sm:block"></div>

     <div className="flex flex-col gap-3 sm:w-[62rem]">
        <p className="text-(--an-specialities-title-color) text-(length:--an-specialities-title-size) font-(--an-specialities-font-weight)">Specialities</p>
        <div className="flex items-center justify-between">
        <div className="flex items-center border w-full sm:w-[28rem] h-7 pl-2 rounded-lg">
          <SearchIcon className="w-4 h-4" />
          <Input
            type="search"
            placeholder="Search specialities..."
            className="border-none h-7 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none placeholder:text-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search specialities"
          />
        </div>
        <Button 
        variant="default" 
        onClick={() => {}}
        className="bg-transparent border border-[#CECECE] text-[#7A7A7A] shadow-none sm:w-[4rem] h-7 text-xs font-(family-name:--an-font-family) hover:bg-transparent">Save</Button>
        </div>
        <ScrollArea className="h-[calc(100vh-270px)]">
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
