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
import { ChangeEvent, useRef, useState } from "react";

const inputBaseClass =
  "rounded-md border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] placeholder:text-xs shadow-none h-8 w-full font-(family-name:--an-font-family)";
interface FormFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  value?: string | boolean;
  onChange?: (value: string | boolean) => void;
  style?: React.CSSProperties;
  className?: string;
}
const FormField = ({
  label,
  id,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
}: FormFieldProps & { className?: string }) => (
  <div className="flex flex-col gap-1">
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
        className={`${inputBaseClass} ${className}`}
        aria-label={label}
      />
    )}
  </div>
);

export interface errors {
  doctor_en_name: string | "";
  doctor_ar_name: string | "";
  doctor_code: string | "";
  address: string | "";
  education: string | "";
  service_start_year: string | "";
  hod_text: string | "";
  bio: string | "";
  email: string | "";
  mobile_no: string | "";
  res_phone: string | "";
  work_phone: string | "";
  spoken_languages: string | "";
  youtube_link: string | "";
  research_publications: string | "";
}

export function PersonalDetails({ errors }: { errors: errors }) {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    englishName: "",
    arabicName: "",
    doctor_code: "",
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
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange =
    (field: keyof typeof formData) => (value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImageUrl(imageUrl);
    }
  };

  return (
    <ScrollArea className="h-[calc(100vh-140px)]">
    <Card className="w-[calc(100%-1px)] flex flex-col lg:flex-row items-start shadow-none rounded-lg border border-[#E1E1E1] font-(family-name:--an-personal-details-font-family) p-0 pb-6 h-[calc(100vh-140px)]">
      <CardContent className="flex flex-col gap-2 w-full lg:w-1/2 pt-2 pl-3">
        <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
          Personal Details
        </p>
        
        <div className="flex flex-col items-center justify-center rounded-sm bg-[#EDEDED] w-18 h-18 sm:w-22 sm:h-22 mx-auto lg:mx-0">
          {profileImageUrl ? (
            <div className="relative group w-18 h-18 sm:w-24 sm:h-24">
              <img
                src={profileImageUrl}
                alt="Profile Preview"
                className="w-18 h-18 sm:w-24 sm:h-24 rounded object-cover"
              />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-1">
              <DoctorProfile className="w-6 h-6 sm:w-7 sm:h-7" />
              <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-profile-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight) text-xs sm:text-xs">
                Profile
              </p>
              <Button
                variant="ghost"
                className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight) hover:bg-transparent hover:text-(--an-personalDetails-title-color) cursor-pointer text-xs sm:text-xs !h-1 mb-1"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload
              </Button>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid gap-4 text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
          <div className="flex-1 w-full">
            <FormField
              id="englishName"
              label="English Name"
              placeholder="Enter english name"
              value={formData.englishName}
              onChange={handleInputChange("englishName")}
            />
            <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
              {errors.doctor_en_name}
            </p>
          </div>
          <div className="flex-1 w-full">
            <FormField
              id="arabicName"
              label="Arabic Name"
              placeholder="Enter arabic name"
              value={formData.arabicName}
              onChange={handleInputChange("arabicName")}
            />
            <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
              {errors.doctor_ar_name}
            </p>
          </div>
        </div>

        <div className="flex flex-col text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
          <FormField
            id="doctor_code"
            label="Doctor Code"
            placeholder="Enter doctor code"
            value={formData.doctor_code}
            onChange={handleInputChange("doctor_code")}
            className="w-full"
          />
          <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
            {errors.doctor_code}
          </p>
        </div>

        <div className="flex flex-col font-(family-name:--an-font-family) text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight) gap-1">
          <Label
            htmlFor="address"
            className="text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)"
          >
            Address
          </Label>
          <Textarea
            className={`${inputBaseClass} min-h-16 max-h-16 resize-none w-full placeholder:font-normal`}
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
          <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1">
            {errors.address}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
            Professional Details
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 font-(family-name:--an-font-family) text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight)">
            <div className="flex-1">
              <FormField
                id="qualification"
                label="Highest Qualification"
                placeholder="Enter highest qualification"
                value={formData.qualification}
                onChange={handleInputChange("qualification")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.education}
              </p>
            </div>
            <div className="flex-1">
              <FormField
                id="experience"
                label="Years of Experience"
                placeholder="Enter experience"
                value={formData.experience}
                onChange={handleInputChange("experience")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.service_start_year}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:flex-row gap-4 justify-between w-full">
            <div className="flex flex-col gap-1">
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
              <div className="flex flex-col flex-1 sm:max-w-xs">
                <div className="flex flex-col gap-1">
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
                      className={`${inputBaseClass} !h-8 text-xs w-full`}
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
                <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                  {errors.hod_text}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full gap-1">
          <Label
            htmlFor="bio"
            className="text-(--an-personalDetails-form-color) text-(length:--an-personalDetails-profile-font) font-(--an-personalDetails-font-weight) font-(family-name:--an-font-family)"
          >
            Professional Bio
          </Label>
          <Textarea
            className={`${inputBaseClass} min-h-16 max-h-16 resize-none w-full placeholder:font-normal`}
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
          <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1">
            {errors.bio}
          </p>
        </div>
      </CardContent>

      <div className="hidden lg:block w-px bg-[#E6E6E6] self-stretch mt-4"></div>
      
      {/* Horizontal divider for mobile/tablet */}
      <div className="block lg:hidden w-full h-px bg-[#E6E6E6] mx-2"></div>

      <CardContent className="flex flex-col gap-3 w-full lg:w-1/2 pt-2 pl-3">
        <div className="flex flex-col gap-2">
          <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
            Contact & Languages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <FormField
                id="email"
                label="Email Address"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange("email")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.email}
              </p>
            </div>
            <div className="flex-1">
              <FormField
                id="mobile"
                label="Mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleInputChange("mobile")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.mobile_no}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <FormField
                id="res_mobile"
                label="Residential Mobile"
                placeholder="Enter residential mobile"
                value={formData.resMobile}
                onChange={handleInputChange("resMobile")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.res_phone}
              </p>
            </div>
            <div className="flex-1">
              <FormField
                id="work_mobile"
                label="Work Mobile"
                placeholder="Enter work mobile"
                value={formData.workMobile}
                onChange={handleInputChange("workMobile")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.work_phone}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
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
                className="w-full h-9 rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#a9a7a7] text-xs shadow-none font-normal"
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
            <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1">
              {errors.spoken_languages}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-(family-name:--an-font-family) text-(--an-personalDetails-title-color) text-(length:--an-personalDetails-font-size) font-(--an-personalDetails-font-weight)">
            Media and Outreach
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <FormField
                id="youtube_link"
                label="YouTube Link"
                placeholder="Enter youtube link"
                value={formData.youtubeLink}
                onChange={handleInputChange("youtubeLink")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.youtube_link}
              </p>
            </div>
            <div className="flex-1">
              <FormField
                id="publications"
                label="Research Publications"
                placeholder="Enter research publications"
                value={formData.publications}
                onChange={handleInputChange("publications")}
              />
              <p className="text-red-500 text-[0.688rem] font-(family-name:--an-font-family) pl-1 mt-0.5">
                {errors.research_publications}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </ScrollArea>
  );
}
