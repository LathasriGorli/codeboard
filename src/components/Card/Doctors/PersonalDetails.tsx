import { DoctorProfile } from "../../icons/DoctorProfile";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "../../ui/textarea";

const inputBaseClass =
  "rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] placeholder:text-xs shadow-none h-8 w-70";

const FormField = ({
  label,
  id,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="flex flex-col">
    <Label htmlFor={id} className="text-[#585858] text-xs font-(family-name:--an-personal-details-font-family)">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      className={inputBaseClass}
    />
  </div>
);

export function PersonalDetails() {
  return (
    <Card className="w-[100%] flex items-start shadow-none rounded-lg border border-[#E1E1E1] bg-white p-2 gap-2 font-(family-name:--an-personal-details-font-family)">
      <div className="flex flex-col gap-2">
        <p className="text-[#005669] text-sm font-medium">Personal Details</p>
        <div className="flex flex-col items-center justify-center rounded-md bg-[#EDEDED] py-1">
          <DoctorProfile />
          <p className="text-[#828282] text-xs font-medium pt-2">Profile</p>
          <Button
            variant="ghost"
            className="text-[#005669] text-xs font-medium bg-[#EDEDED] hover:bg-[#EDEDED] border-none shadow-none cursor-pointer"
          >
            Upload
          </Button>
        </div>
      </div>

      <CardContent className="p-0 w-full">
        <form className="font-medium flex flex-col gap-4">
          <div className="flex gap-4">
            <FormField id="firstName" label="First Name" placeholder="Enter first name"/>
            <FormField id="lastName" label="Last Name" placeholder="Enter last name"/>
          </div>

          <div className="flex gap-4">
            <FormField id="gender" label="Gender" placeholder="Enter gender"/>
            <FormField id="dob" label="DOB" placeholder="Enter date of birth"/>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="address" className="text-[#585858] text-xs">
              Address
            </Label>
            <Textarea
                className={`${inputBaseClass} min-h-18 max-h-18 resize-none w-144`}
                placeholder="Type your address here..."
                onKeyDown={(e) => {
                  if(e.key === 'Enter'){
                    if(e.shiftKey){
                      return;
                    }else{
                      e.preventDefault();
                    }
                  }
                }}
              />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#005669] text-sm font-medium">Professional Details</p>
            <div className="flex gap-4">
              <FormField
                id="qualification"
                label="Highest Qualification"
                placeholder="Enter highest qualification"
            
              />
              <FormField
                id="experience"
                label="Years of Experience"
                placeholder="Enter experience"
            
              />
            </div>
          </div>

          <div className="flex flex-col w-[100%]">
            <Label htmlFor="bio" className="text-[#585858] text-xs">
              Professional Bio
            </Label>
            <Textarea
                className={`${inputBaseClass} min-h-18 max-h-18 resize-none w-144`}
                placeholder="Type your bio here..."
                onKeyDown={(e) => {
                  if(e.key === 'Enter'){
                    if(e.shiftKey){
                      return;
                    }else{
                      e.preventDefault();
                    }
                  }
                }}
              />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#005669] text-sm font-medium">Contact & Languages</p>
            <div className="flex gap-4">
              <FormField id="email" label="Email Address" placeholder="Enter email"/>
              <FormField id="phone" label="Phone" placeholder="Enter phone number"/>
            </div>
            <div>
              <Label htmlFor="languages" className="text-[#585858] text-xs">
                Languages Spoken
              </Label>
              <Select>
                <SelectTrigger
                  id="languages"
                  className="w-144 h-9 rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] text-xs shadow-none"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
