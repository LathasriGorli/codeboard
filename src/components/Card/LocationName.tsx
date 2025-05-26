import { Edit, GripVertical } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";

const gallery = [
  { id: 1, img: "/src/components/icons/LoctaionName/img1.jpg" },
  { id: 2, img: "/src/components/icons/LoctaionName/img2.jpg" },
  { id: 3, img: "/src/components/icons/LoctaionName/img3.jpg" },
  { id: 4, img: "/src/components/icons/LoctaionName/img4.jpg" },
  { id: 5, img: "/src/components/icons/LoctaionName/img5.jpg" },
  { id: 6, img: "/src/components/icons/LoctaionName/img6.jpg" },
  { id: 7, img: "/src/components/icons/LoctaionName/img7.jpg" },
  { id: 8, img: "/src/components/icons/LoctaionName/img8.jpg" },
  { id: 9, img: "/src/components/icons/LoctaionName/img9.jpg" },
];

const speciality = [
  {id:1, name: 'General Practitioner'},
  {id:2, name: 'ENT'},
  {id:3, name: 'Gastroenterology'},
  {id:4, name: 'Diabetology'},
  {id:5, name: 'Psychiatry'},
  {id:6, name: 'Neurology'},
]

export function LocationName() {
  return (
    <div className="flex gap-2">
      <Card className="w-auto flex flex-col rounded-xl bg-[#fff] gap-[20px]">
        <CardHeader className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="flex gap-8 items-center">
              <CardTitle className="text-[#000] text-center text-xl font-normal font-(family-name:--an-location-name-font-family)">
                Location Name
              </CardTitle>
              <span className="text-[#009D46] rounded-xl bg-[#CEDFCE] w-20 h-6 text-center font-(family-name:--an-location-name-font-family)">
                Active
              </span>
            </div>
            <CardDescription className="text-[#005669] text-center text-lg font-normal font-(family-name:--an-location-name-font-family)">
              عنوان التخصص
            </CardDescription>
          </div>
          <Button className="font-(family-name:--an-location-name-font-family) rounded-sm bg-(--an-location-name-edit-button-bg) text-[#005669] text-base font-medium hover:bg-(--an-location-name-edit-button-bg) cursor-pointer">
            <Edit className="text-[#005669]" />
            Edit
          </Button>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap-1">
                <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
                  Created On
                </Label>
                <p className="text-[#000] font-(family-name:--an-location-name-font-family) text-lg font-normal">
                  26-05-2025
                </p>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-1">
                  <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
                    Email ID
                  </Label>
                  <p className="text-[#000] font-(family-name:--an-location-name-font-family) text-lg font-normal">
                    info@almanahospital.com.sa
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
                    Phone
                  </Label>
                  <p className="text-[#000] font-(family-name:--an-location-name-font-family) text-lg font-normal">
                    +917013170520
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
                  Icon
                </Label>
                <img
                  src="/src/components/icons/LoctaionName/ImgIcon.svg"
                  className="w-[100px] h-[100px]"
                />
                <button className="text-[#2D9CDB] font-(family-name:--an-location-name-font-family) text-base font-normal text-start cursor-pointer">
                  Edit Icon
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
                  Full Address
                </Label>
                <p className="text-[#000] font-(family-name:--an-location-name-font-family) text-lg font-normal">
                  26-05-2025
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
                  Google Map URL
                </Label>
                <a
                  href="https://maps.app.goo.gl/ruQRae6CP6J22wDa7" target="_blank"
                  className="text-[#2F80ED] font-(family-name:--an-location-name-font-family) text-lg font-normal underline decoration-auto decoration-solid"
                >
                  https://maps.app.goo.gl/ruQRae6CP6J22wDa7
                </a>
              </div>
              <Label className="w-[210px] text-[#6B6B6B] font-(family-name:--an-location-name-font-family) text-base font-normal">
            Gallery
          </Label>
          <div className="flex gap-2">
          {gallery.map((image) => (
            <div key={image.id} className="flex gap-2">
              <img
                src={image.img}
                alt=""
                className="rounded-lg w-[76px] h-[76px] border border-[#CECECE]"
              />
            </div>
          ))}
          </div>
            </div>
          </form>
        </CardContent>
      </Card>
    <Card className="flex w-[339px] flex-col rounded-xl bg-[#fff] gap-[20px] border-1 border-[#D2E2D7] px-0">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <img src="/src/components/icons/LoctaionName/SpecalityIcon.svg" alt="" />
          <p className="text-[#212121] font-(family-name:--an-location-name-font-family) text-base font-medium">Specialities</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {speciality.map((item) => (
          <div className="flex gap-2 items-center rounded-lg border-1 border-[#CECECE] bg-[#FAFAFA] p-1 mt-1">
            <GripVertical className="text-[#C6C6C6]"/>
            <p>{item.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
    </div>
  );
}
