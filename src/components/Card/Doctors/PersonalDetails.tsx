import { ScrollArea } from "~/components/ui/scroll-area";
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
import { ChangeEvent, useState } from "react";

const inputBaseClass =
  "rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] placeholder:text-xs shadow-none h-8 w-70";

interface FormFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  value?: string | boolean;
  onChange?: ((value: string | boolean) => void) | undefined;
}

const FormField = ({
  label,
  id,
  placeholder,
  type = "text",
  value,
  onChange,
}: FormFieldProps) => (
  <div className="flex flex-col">
    <Label htmlFor={id} className="text-[#585858] text-xs font-sans">
      {label}
    </Label>
    {type === "checkbox" ? (
      <Input
        id={id}
        type="checkbox"
        checked={!!value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.checked)
        }
        className="h-4 w-4 mt-1"
        aria-label={label}
      />
    ) : (
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={typeof value === "string" ? value : undefined}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.value)
        }
        className={inputBaseClass}
        aria-label={label}
      />
    )}
  </div>
);

export function PersonalDetails() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    englishName: "",
    arabicName: "",
    address: "",
    qualification: "",
    experience: "",
    bio: "",
    email: "",
    mobile: "",
    resMobile: "",
    workMobile: "",
    youtubeLink: "",
    publications: "",
    hodType: "",
    languages: "",
  });

  const handleInputChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollArea className="h-screen">
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
              <FormField
                id="englishName"
                label="English Name"
                placeholder="Enter english name"
                value={formData.englishName}
                onChange={handleInputChange("englishName")}
              />
              <FormField
                id="arabicName"
                label="Arabic Name"
                placeholder="Enter arabic name"
                value={formData.arabicName}
                onChange={handleInputChange("arabicName")}
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="address" className="text-[#585858] text-xs">
                Address
              </Label>
              <Textarea
                className={`${inputBaseClass} min-h-18 max-h-18 resize-none w-144`}
                placeholder="Type your address here..."
                value={formData.address}
                onChange={(e) => handleInputChange("address")(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.shiftKey) {
                      return;
                    } else {
                      e.preventDefault();
                    }
                  }
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#005669] text-sm font-medium">
                Professional Details
              </p>
              <div className="flex gap-4">
                <FormField
                  id="qualification"
                  label="Highest Qualification"
                  placeholder="Enter highest qualification"
                  value={formData.qualification}
                  onChange={handleInputChange("qualification")}
                />
                <FormField
                  id="experience"
                  label="Practice Since"
                  placeholder="Enter experience"
                  value={formData.experience}
                  onChange={handleInputChange("experience")}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-68 items-center">
                <FormField
                  id="hod"
                  label="HOD"
                  type="checkbox"
                  value={isChecked}
                  onChange={setIsChecked}
                />
                {isChecked && (
                  <div>
                    <Label
                      htmlFor="hod_type"
                      className="text-[#585858] text-xs font-sans"
                    >
                      Type
                    </Label>
                    <Select
                      value={formData.hodType}
                      onValueChange={handleInputChange("hodType")}
                    >
                      <SelectTrigger
                        id="hod_type"
                        className={`${inputBaseClass} h-9 text-xs`}
                        aria-label="HOD Type"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="dean">Dean</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col w-[100%]">
              <Label htmlFor="bio" className="text-[#585858] text-xs">
                Professional Bio
              </Label>
              <Textarea
                className={`${inputBaseClass} min-h-16 max-h-16 resize-none w-144`}
                placeholder="Type your bio here..."
                value={formData.bio}
                onChange={(e) => handleInputChange("bio")(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.shiftKey) {
                      return;
                    } else {
                      e.preventDefault();
                    }
                  }
                }}
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#005669] text-sm font-medium">
                Contact & Languages
              </p>
              <div className="flex gap-4">
                <FormField
                  id="email"
                  label="Email Address"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                />
                <FormField
                  id="mobile"
                  label="Mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange("mobile")}
                />
              </div>
              <div className="flex gap-4">
                <FormField
                  id="res_mobile"
                  label="Residential Mobile"
                  placeholder="Enter residential mobile"
                  value={formData.resMobile}
                  onChange={handleInputChange("resMobile")}
                />
                <FormField
                  id="work_mobile"
                  label="Work Mobile"
                  placeholder="Enter work mobile"
                  value={formData.workMobile}
                  onChange={handleInputChange("workMobile")}
                />
              </div>
              <div>
                <Label htmlFor="languages" className="text-[#585858] text-xs">
                  Languages Spoken
                </Label>
                <Select value={formData.languages} onValueChange={handleInputChange("languages")}>
                  <SelectTrigger
                    id="languages"
                    className="w-144 h-9 rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] text-xs shadow-none"
                    aria-label="Languages Spoken"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="tagalog">Tagalog</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#005669] text-sm font-medium">
                Media and Outreach
              </p>
              <div className="flex gap-4">
                <FormField
                  id="youtube_link"
                  label="YouTube Link"
                  placeholder="Enter youtube link"
                  value={formData.youtubeLink}
                  onChange={handleInputChange("youtubeLink")}
                />
                <FormField
                  id="publications"
                  label="Research Publications"
                  placeholder="Enter research publications"
                  value={formData.publications}
                  onChange={handleInputChange("publications")}
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}
