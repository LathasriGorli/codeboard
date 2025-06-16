import { Edit, Edit2, Edit2Icon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { BackButton } from "./ArrowLeft";
import { OTPEdit } from "../icons/OTPEdit";

type DoctorLeaveProps = {
  imgUrl: string;
  doctor_name: string;
  doctor_qualification: string;
  leave_type: "Holiday" | "Conference" | "Sick";
  from_date: string;
  to_date: string;
  description: string;
};

type LeaveType = "Holiday" | "Conference" | "Sick";

const LeaveData : DoctorLeaveProps = {
  imgUrl: "https://github.com/shadcn.png",
  doctor_name: "Dr. Emily Carter",
  doctor_qualification: "MD in Cardiology",
  leave_type: "Holiday",
  from_date: "27-07-1996 07:30 AM",
  to_date: "28-07-1996 08:30 AM",
  description: "Leave requested from July 27, 1996, at 7:30 AM. Please ensure all responsibilities are delegated during this period.",
}

export function DoctorLeave() {
  const typeStyles: Record<LeaveType, { color: string; borderColor: string }> = {
    Holiday: { color: "#F2994A", borderColor: "#F2994A" },
    Conference: { color: "#9B51E0", borderColor: "#9B51E0" },
    Sick: { color: "#B90000", borderColor: "#B90000" },
  };
  const leaveType = LeaveData.leave_type;
  return (
    <div className="flex gap-2 justify-center">
      <BackButton onclick={() => {}} />
      <Card className="max-w-[900px] w-full flex rounded-xl bg-[#fff] shadow-none border-none">
        <CardHeader className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={LeaveData.imgUrl}
              alt="profile"
              className="rounded-full w-8 h-8"
            />
            <p className="text-[#333] text-center font-(family-name:--an-doctor-leave-font-family) text-base font-normal">
              {LeaveData.doctor_name}{" "}
              <span className="text-[#333] text-end font-(family-name:--an-doctor-leave-font-family) text-xs font-semibold">
                {LeaveData.doctor_qualification}
              </span>
            </p>
          </div>
          <Button className="h-8 w-15 font-(family-name:--an-doctor-leave-font-family) rounded-sm bg-(--an-doctor-leave-edit-button-bg) text-(--an-doctor-leave-edit-text-color) text-sm font-medium hover:bg-(--an-doctor-leave-edit-button-bg) cursor-pointer">
            <OTPEdit className="text-(--an-doctor-leave-edit-text-color)" />
            Edit
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 font-normal">
          <div className="flex flex-col w-30 gap-2 text-sm">
            <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family)">
              Leave Type
            </Label>
            <span
              style={{
                color: typeStyles[leaveType].color,
                borderColor: typeStyles[leaveType].borderColor,
              }}
              className="border rounded-md px-2 py-1 w-fit font-(family-name:--an-doctor-leave-font-family)"
            >
              {leaveType}
            </span>
          </div>
          <div className="flex gap-6 text-sm">
            <div className="flex flex-col gap-1">
              <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family)">
                From
              </Label>
              <p className="text-(--an-doctor-leave-text-color) font-(family-name:--an-doctor-leave-font-family)">
                {LeaveData.from_date}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family)">
                To
              </Label>
              <p className="text-(--an-doctor-leave-text-color) font-(family-name:--an-doctor-leave-font-family)">
                {LeaveData.to_date}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family) text-sm">
              Description
            </Label>
            <p className="text-(--an-doctor-leave-text-color) font-(family-name:--an-doctor-leave-font-family)">
              {LeaveData.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
