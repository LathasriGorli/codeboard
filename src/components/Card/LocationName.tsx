import { ArrowLeft, Edit, GripVertical } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { cn } from "~/lib/utils";
import { BackButton } from "./ArrowLeft";

interface Data {
  status: boolean;
  created_on: string;
  email: string;
  phone: string;
  address: string;
}
interface GalleryItem {
  img: string;
}

interface SpecialityItem {
  name: string;
}

interface DoctorItem {
  name: string;
}

interface LocationNameProps {
  data: Data;
  doctors: DoctorItem[];
  speciality: SpecialityItem[];
  gallery: GalleryItem[];
}


export function LocationName({ data, doctors, speciality, gallery }: LocationNameProps) {
  return (
    <div className="flex gap-2 w-full max-w-full">
      <BackButton onclick={() => {}} />
      <Card className="w-full md:w-[48%] lg:w-[50%] flex flex-col rounded-xl bg-(--an-location-name-background) gap-[20px] border-none shadow-none">
        <CardHeader className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="flex gap-8 items-center">
              <CardTitle className="text-(--an-location-name-title) text-center text-base font-normal font-(family-name:--an-location-name-font-family)">
                Location Name
              </CardTitle>
              <div
            className={cn(
              "rounded-xl font-normal text-xs w-fit px-2 flex items-center justify-center font-(family-name:--an-location-name-font-family)",
              data.status === true
                ? "bg-(--an-location-active-background) text-(--an-location-active-text-color) hover:bg-(--an-location-active-background)" : "bg-(--an-location-inactive-background) text-(--an-location-inactive-text-color) hover:bg-(--an-location-inactive-background)"
            )}
          >
            {data.status === true ? "Active" : data.status === false ? "Inactive" : ""}
          </div>
            </div>
            <CardDescription className="text-(--an-location-name-edit-text-color) text-center text-sm font-normal font-(family-name:--an-location-name-font-family)">
              عنوان التخصص
            </CardDescription>
          </div>
          <Button className="font-(family-name:--an-location-name-font-family) rounded-sm bg-(--an-location-name-edit-button-bg) text-(--an-location-name-edit-text-color) text-sm font-medium hover:bg-(--an-location-name-edit-button-bg) cursor-pointer">
            <Edit className="text-(--an-location-name-edit-text-color)" />
            Edit
          </Button>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap-1">
                <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                  Created On
                </Label>
                <p className="text-(--an-location-name-title) font-(family-name:--an-location-name-font-family) text-sm font-normal">
                  {data.created_on}
                </p>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-1">
                  <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                    Email ID
                  </Label>
                  <p className="text-(--an-location-name-title) font-(family-name:--an-location-name-font-family) text-sm font-normal">
                    {data.email}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                    Phone
                  </Label>
                  <p className="text-(--an-location-name-title) font-(family-name:--an-location-name-font-family) text-sm font-normal">
                    {data.phone}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                  Icon
                </Label>
                <img
                  src="/src/components/icons/LoctaionName/ImgIcon.svg"
                  className="w-[80px] h-[80px]"
                />
                <button className="text-(--an-location-name-edit-icon) font-(family-name:--an-location-name-font-family) text-xs font-normal text-start cursor-pointer">
                  Edit Icon
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                  Full Address
                </Label>
                <p className="text-(--an-location-name-title) font-(family-name:--an-location-name-font-family) text-sm font-normal">
                  {data.address}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                  Google Map URL
                </Label>
                <a
                  href="https://maps.app.goo.gl/ruQRae6CP6J22wDa7"
                  target="_blank"
                  className="text-(--an-location-name-map-color) font-(family-name:--an-location-name-font-family) text-sm font-normal underline decoration-auto decoration-solid"
                >
                  https://maps.app.goo.gl/ruQRae6CP6J22wDa7
                </a>
              </div>
              <Label className="w-(--an-location-name-label-width) text-(--an-location-name-label-color) font-(family-name:--an-location-name-font-family) text-xs font-normal">
                Gallery
              </Label>
              <div className="flex gap-2">
                {gallery.map((image, index) => (
                  <div key={index} className="flex gap-2">
                    <img
                      src={image.img}
                      alt=""
                      className="rounded-lg w-(--an-loctaion-name-gallery-size) h-(--an-loctaion-name-gallery-size) border border-(--an-location-name-gallery-border-color)"
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="flex w-full md:w-[48%] lg:w-[20%] flex-col rounded-xl bg-(--an-location-name-background) gap-2 border-1 border-(--an-location-name-border) py-3 shadow-none">
        <CardHeader className="px-3">
          <CardTitle className="flex gap-2">
            <img
              src="/src/components/icons/LoctaionName/SpecalityIcon.svg"
              alt=""
            />
            <p className="text-(--an-location-name-subcard-title) font-(family-name:--an-location-name-font-family) text-sm font-medium">
              Specialities
            </p>
          </CardTitle>
        </CardHeader>
        <div className="w-[90%] ml-3 border-b border-black/10 focus:outline-none "></div>
        <CardContent className="px-3">
          {speciality.map((item, index) => (
            <div key={index} className="flex gap-2 items-center rounded-lg border-1 border-(--an-location-name-gallery-border-color) bg-(--an-location-name-subcard-bg) p-1 mt-2">
              <GripVertical className="text-[#C6C6C6]" />
              <p className="text-(--an-location-name-subcard-text-color) font-(family-name:--an-location-name-font-family) text-xs font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="flex w-full md:w-[48%] lg:w-[30%] flex-col rounded-xl bg-(--an-location-name-background) gap-2 border-1 border-(--an-location-name-border) py-3 shadow-none">
        <CardHeader className="px-3">
          <CardTitle className="flex gap-2 ">
            <img
              src="/src/components/icons/LoctaionName/SpecalityIcon.svg"
              alt=""
            />
            <p className="text-(--an-location-name-subcard-title) font-(family-name:--an-location-name-font-family) text-sm font-medium">
              Doctors
            </p>
          </CardTitle>
        </CardHeader>
        <div className="w-[90%] ml-3 border-b border-black/10 focus:outline-none "></div>
        <CardContent className="px-3">
          {doctors.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center rounded-lg bg-(--an-location-name-subcard3-bg) p-1 mt-2 h-10"
            >
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
                className="w-6 h-6 rounded-full"
              />
              <p className="text-(--an-location-name-subcard-text-color) font-(family-name:--an-location-name-font-family) text-xs font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
