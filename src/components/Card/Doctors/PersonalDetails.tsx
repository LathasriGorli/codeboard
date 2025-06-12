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
  "rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] placeholder:text-xs shadow-none h-8 w-70 font-(family-name:--an-font-family)";
interface FormFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  value?: string | boolean;
  onChange?: ((value: string | boolean) => void);
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
    <Label
      htmlFor={id}
      className="text-(--an-personalDetails-form-color) text-xs font-(family-name:--an-font-family)"
    >
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
        className="h-4 w-4 mt-1 font-(family-name:--an-font-family) text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)"
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
    hospitals: [] as string[],
  });
  const handleInputChange =
    (field: keyof typeof formData) => (value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  return (
    <Card className="w-full flex flex-row items-start shadow-none rounded-lg border border-[#E1E1E1] font-(family-name:--an-personal-details-font-family) p-0">
      <ScrollArea className="h-[calc(100vh-160px)]">
        <div className="flex flex-col gap-4 w-[65%] p-3">
          <CardContent className="p-0">
            <form className="font-medium flex flex-col gap-4">
              <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
                Personal Details
              </p>
              <div className="flex flex-col items-center justify-center rounded-md bg-[#EDEDED] w-25 h-25">
                <DoctorProfile className="w-8 h-8" />
                <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-profile-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
                  Profile
                </p>
                <Button
                  variant="ghost"
                  className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight) hover:bg-transparent hover:text-(--an-personalDetails-title-color) cursor-pointer"
                >
                  Upload
                </Button>
              </div>
              <div className="flex gap-4 text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
                <FormField
                  id="englishName"
                  label="English Name"
                  placeholder="Enter english name"
                  value={formData.englishName}
                  onChange={handleInputChange("englishName")}
                />
                <FormField
                  id="arabicName"
                  label="Last Name"
                  placeholder="Enter arabic name"
                  value={formData.arabicName}
                  onChange={handleInputChange("arabicName")}
                />
              </div>
              <div className="flex flex-col font-(family-name:--an-font-family) text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
                <Label
                  htmlFor="address"
                  className="text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)"
                >
                  Address
                </Label>
                <Textarea
                  className={`${inputBaseClass} min-h-16 max-h-16 resize-none w-144 placeholder:font-normal`}
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
                <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
                  Professional Details
                </p>
                <div className="flex gap-4 font-(family-name:--an-font-family) text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
                  <FormField
                    id="qualification"
                    label="Highest Qualification"
                    placeholder="Enter highest qualification"
                    value={formData.qualification}
                    onChange={handleInputChange("qualification")}
                  />
                  <FormField
                    id="experience"
                    label="Years of Experience"
                    placeholder="Enter experience"
                    value={formData.experience}
                    onChange={handleInputChange("experience")}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-between w-144">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="hod"
                      className="text-(--an-personalDetails-form-color) text-xs font-(family-name:--an-font-family)"
                    >
                      HOD
                    </Label>
                    <div className="flex items-center gap-2">
                    <Input
                      id="hod"
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="h-4 w-4"
                    />
                    <span className="text-xs font-(family-name:--an-font-family) text-(--an-personalDetails-form-color)">
                      Yes
                    </span>
                    </div>
                  </div>

                  {isChecked && (
                    <div>
                      <Label
                        htmlFor="hod_type"
                        className="text-(--an-personalDetails-form-color) text-xs font-(family-name:--an-font-family)"
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
                          <SelectItem
                            value="dean"
                            className="text-xs font-normal font-(family-name:--an-font-family)"
                          >
                            Dean
                          </SelectItem>
                          <SelectItem
                            value="cardiology"
                            className="text-xs font-normal font-(family-name:--an-font-family)"
                          >
                            Cardiology
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-[100%]">
                <Label
                  htmlFor="bio"
                  className="text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight) font-(family-name:--an-font-family)"
                >
                  Professional Bio
                </Label>
                <Textarea
                  className={`${inputBaseClass} min-h-16 max-h-16 resize-none w-144 placeholder:font-normal`}
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
                <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
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
                  <Label
                    htmlFor="languages"
                    className="text-(--an-personalDetails-form-color) text-xs font-(family-name:--an-font-family)"
                  >
                    Languages Spoken
                  </Label>
                  <Select
                    value={formData.languages}
                    onValueChange={handleInputChange("languages")}
                  >
                    <SelectTrigger
                      id="languages"
                      className="w-144 h-9 rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] text-xs shadow-none font-normal"
                      aria-label="Languages Spoken"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem
                        value="english"
                        className="text-xs font-(family-name:--an-font-family)"
                      >
                        English
                      </SelectItem>
                      <SelectItem
                        value="arabic"
                        className="text-xs font-(family-name:--an-font-family)"
                      >
                        Arabic
                      </SelectItem>
                      <SelectItem
                        value="french"
                        className="text-xs font-(family-name:--an-font-family)"
                      >
                        French
                      </SelectItem>
                      <SelectItem
                        value="hindi"
                        className="text-xs font-(family-name:--an-font-family)"
                      >
                        Hindi
                      </SelectItem>
                      <SelectItem
                        value="tagalog"
                        className="text-xs font-(family-name:--an-font-family)"
                      >
                        Tagalog
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
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
        </div>
      </ScrollArea>
    </Card>
  );
}
