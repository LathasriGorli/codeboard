
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "~/components/ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import { Label } from "../ui/label";

export function DoctorLeave() {
  return (
    <div className="flex gap-2 justify-center">
    <Button className="bg-white text-black border shadow rounded-lg hover:bg-white hover:text-black"><ArrowLeft /></Button>
    <Card className="max-w-[1100px] w-full flex rounded-xl bg-[#fff] shadow-none border">
      <CardHeader className="flex justify-between border">
        <CardTitle className="flex">
            <div className="flex gap-2">
                <img src="https://github.com/shadcn.png" alt="profile" className="rounded-full w-8 h-8"/>
                <p className="text-[#333] text-center font-(family-name:--an-doctor-leave-font-family) text-lg font-normal">Dr. Emily Carter <span className="text-[#333] text-center font-(family-name:--an-doctor-leave-font-family) text-sm font-semibold">MD in Cardiology</span></p>
            </div>
            <Button className="font-(family-name:--an-doctor-leave-font-family) rounded-sm bg-(--an-location-name-edit-button-bg) text-(--an-location-name-edit-text-color) text-base font-medium hover:bg-(--an-location-name-edit-button-bg) cursor-pointer">
            <Edit className="text-(--an-location-name-edit-text-color)" />
            Edit
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="border">
        <div className="flex flex-col w-[210px]">
            <Label className="text-[#6B6B6B] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">Leave Type</Label>
            <span className="text-[#F2994A] font-(family-name:--an-doctor-leave-font-family) text-base font-normal border border-[#F2994A] rounded-md px-2 py-1">Holiday</span>
        </div>
        <div className="flex gap-6">
        <div className="flex flex-col w-[210px]">
            <Label className="text-[#6B6B6B] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">From</Label>
            <p className="text-[#000] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">27-07-1996 07:30AM</p>
        </div>
        <div className="flex flex-col w-[210px]">
            <Label className="text-[#6B6B6B] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">To</Label>
            <p className="text-[#000] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">27-07-1996 07:30AM</p>
        </div>
        </div>
        <div className="flex flex-col w-[210px]">
            <Label className="text-[#6B6B6B] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">Description</Label>
            <p className="text-[#000] font-(family-name:--an-doctor-leave-font-family) text-base font-normal">Leave requested from July 27, 1996, at 7:30 AM. Please ensure all responsibilities are delegated during this period.</p>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
