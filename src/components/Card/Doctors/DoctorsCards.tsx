import type React from "react";
import { Card, CardFooter } from "~/components/ui/card";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { User, Stethoscope, Calendar } from "lucide-react";
import { errors, PersonalDetails} from "./PersonalDetails";
import { Specialities } from "./Specialities";
import { BackButton } from "../ArrowLeft";
import { ScrollArea } from "~/components/ui/scroll-area";

interface Tab {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
const tabs: Tab[] = [
  { id: "personal", name: "Personal Details", icon: User },
  { id: "specialities", name: "Specialities  & Locations", icon: Stethoscope },
  { id: "availability", name: "Availability and Scheduling", icon: Calendar },
];
interface TabbedOuterCardProps {
  onBack?: () => void;
  showBackButton?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
}

const messages: errors = {
  doctor_en_name : '',
  doctor_ar_name : '',
  address : '',
  education : '',
  service_start_year : '',
  hod_text : '',
  bio : '',
  email : '',
  mobile_no: '',
  res_phone : '',
  work_phone : '',
  spoken_languages : '',
  youtube_link : '',
  research_publications : ''
}
export function DoctorsCards({}: TabbedOuterCardProps) {
  const [activeTab, setActiveTab] = useState("personal");
  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
      return (
        <ScrollArea className={messages && Object.keys(messages).length > 0 ? "overflow-y-auto" : ""}>
          <PersonalDetails errors={messages} />
        </ScrollArea>
      );
        case "specialities":
        return <Specialities/>
      default:
        return null;
    }
  };
  return (
    <div className={`w-full mx-auto my-2 ${messages && Object.keys(messages).length > 0 ? "overflow-y-auto" : ""}`}>
      <div className="flex gap-2">
        <BackButton onclick={() => {}} />
<div className="flex-1 bg-[#DEEEE4] px-3 pb-2 rounded-lg h-[calc(100vh-65px)] mr-2">
          <div className="mt-2 -ml-3 relative mb-2">
            <div className="flex items-center">
              <div className="w-1 h-9 bg-(--an-card-button-color) rounded-r-full mr-3"></div>
            </div>
          </div>
          <div className="mb-2 -mt-10">
            <div className="flex space-x-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-sm font-[urbanist]  text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) leading-(--an-personalDetails-font-height) font-(--an-personalDetails-font-weight) -mt-1 relative ${
                    activeTab === tab.id
                      ? "text-[#005669] border-b-2 mb-1 border-[#000] "
                      : "text-gray-500 hover:text-gray-700 "
                  }`}
                >
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mt-2">{renderTabContent()}</div>
          <CardFooter className="flex justify-end space-x-4 -px-0 border-0 bg-transparent mt-2">
            <Button
              variant="outline"
              className="rounded-md h-7 w-20 border border-gray-300 font-[urbanist] text-(--an-text-Adds-cancel-color) text-(length:--an-addleave-cardcontent-placeholder-fontsize) font-(--an-text-Adds-weightc) leading-(--an-addleave-card-cardtitle-text-height) bg-(--an-text-Adds-cancelbg-color) hover:bg-(--an-text-Adds-cancelbg-hover-color) shadow-none"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-md h-7 w-20 font-[urbanist] text-(--an-personalDetails-next-text-color) text-(length:--an-addleave-cardcontent-placeholder-fontsize) font-(--an-text-Adds-weightc) leading-(--an-addleave-card-cardtitle-text-height) bg-(--an-personalDetails-next-color) hover:bg-(--an-personalDetails-next-color)"
            >
              Next
            </Button>
          </CardFooter>
        </div>
      </div>
    </div>
  );
}