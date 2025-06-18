import { Edit, Edit2, Edit2Icon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { BackButton } from "./ArrowLeft";
import { OTPEdit } from "../icons/OTPEdit";
import { EditIcon } from "../icons/EditIcon";

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
    <div className="flex gap-2 justify-center mt-1">
      <BackButton onclick={() => {}} />
      <Card className="!w-[calc(100vw-35rem)] flex rounded-xl bg-[#fff] shadow-none border-none py-3 gap-3">
        <CardHeader className="flex justify-between px-4">
          <div className="flex gap-2 justify-center items-center">
            <img
              src={LeaveData.imgUrl}
              alt="profile"
              className="rounded-full w-6 h-6"
            />
            <p className="text-[#333] text-center font-(family-name:--an-doctor-leave-font-family) text-sm font-normal">
              {LeaveData.doctor_name}{" "}
              <span className="text-[#333] text-end font-(family-name:--an-doctor-leave-font-family) text-[11px] font-semibold">
                {LeaveData.doctor_qualification}
              </span>
            </p>
          </div>
          <Button className="h-7 w-14 font-(family-name:--an-doctor-leave-font-family) rounded bg-(--an-doctor-leave-edit-button-bg) text-(--an-doctor-leave-edit-text-color) text-xs font-medium hover:bg-(--an-doctor-leave-edit-button-bg) cursor-pointer">
            <EditIcon className="!w-3 !h-4" />
            Edit
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 font-normal px-4">
          <div className="flex flex-col w-30 gap-1 text-xs">
            <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family) text-xs">
              Leave Type
            </Label>
            <span
              style={{
                color: typeStyles[leaveType].color,
                borderColor: typeStyles[leaveType].borderColor,
              }}
              className="border rounded p-1 w-fit font-(family-name:--an-doctor-leave-font-family) h-6"
            >
              {leaveType}
            </span>
          </div>
          <div className="flex gap-15 text-xs">
            <div className="flex flex-col gap-1">
              <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family) text-xs">
                From
              </Label>
              <p className="text-(--an-doctor-leave-text-color) font-(family-name:--an-doctor-leave-font-family) text-[13px]">
                {LeaveData.from_date}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family) text-xs">
                To
              </Label>
              <p className="text-(--an-doctor-leave-text-color) font-(family-name:--an-doctor-leave-font-family) text-[13px]">
                {LeaveData.to_date}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-(--an-doctor-leave-label-color) font-(family-name:--an-doctor-leave-font-family) text-xs">
              Description
            </Label>
            <p className="text-(--an-doctor-leave-text-color) font-(family-name:--an-doctor-leave-font-family) text-sm">
              {LeaveData.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
