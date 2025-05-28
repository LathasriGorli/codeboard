import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Calendar } from "../icons/Appointment/Calendar";
import { MotherIcon } from "../icons/Appointment/MotherIcon";
import { ProgressIcon } from "../icons/Appointment/progressIcon";
import { BackButton } from "./ArrowLeft";

const appointScreenData = [
  {
    icon: <MotherIcon />,
    title: "Patient",
    subtitle: "General Practitioner",
  },
  {
    icon: <Calendar />,
    title: "Date & Slot",
    subtitle: "1 Jan 2025",
    subtitle2: "08:00 AM - 10:00 AM",
  },
  {
    icon: <img src="https://github.com/shadcn.png" alt="profile" className="rounded-full"/>,
    title: "Doctor",
    subtitle: "Name of Doctor",
  },
  {
    icon: <Calendar />,
    title: "Speciality",
    subtitle: "General Practitioner",
  },
]

const symptoms = [
  {title: 'Tremor'},
  {title: 'Dizziness'},
  {title: 'Cough'},
  {title: 'Stridor'},
  {title: 'Palpitations'},
  {title: 'Wheeze'},
  {title: 'Rattle'},
  {title: 'Dysuria'},
  {title: 'Bloating'},
  {title: 'Itch'},
  {title: 'Burn'},
]

const description = "Scheduling appointments can be a breeze when you have the right tools at your disposal. Whether it's for a doctor's visit, a business meeting, or a casual catch-up with friends, having a clear plan helps ensure that everyone is on the same page. Consider using a digital calendar or an appointment-setting app to keep track of your commitments. This way, you can easily adjust your schedule and send reminders to those involved, making the process smooth and efficient."

export function AppointmentScreen() {
  return (
    <div className="flex gap-2 justify-center">
      <BackButton onclick={() => {}}/>
    <Card className="max-w-[1100px] w-full flex rounded-xl bg-(--an-appoint-screen-background) shadow-none border-none">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-(--an-appoint-screen-header-text-color) font-(family-name:--an-appoint-screen-font-family) text-xl font-medium">
          Teleconsultation
        </CardTitle>
        <CardDescription className="flex gap-2">
          <ProgressIcon />
          <p className="text-(--an-appoint-screen-header-text-color) font-(family-name:--an-appoint-screen-font-family) text-base font-normal">
            In Progress
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          {appointScreenData.map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="border-1 border-(--an-appoint-screen-icon-border-color) bg-(--an-appoint-screen-icon-bg-color) rounded-full flex items-center justify-center w-[45px] h-[45px]">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-(--an-appoint-screen-icon-title-color) font-(family-name:--an-appoint-screen-font-family) text-sm font-normal">
                  {item.title}
                </p>
                <p className="text-(--an-appoint-screen-icon-subtitle-color) font-(family-name:--an-appoint-screen-font-family) text-base font-normal">
                  {item.subtitle}
                </p>
                {item.subtitle2 && (
                  <p className="text-(--an-appoint-screen-icon-subtitle-color) font-(family-name:--an-appoint-screen-font-family) text-base font-normal">
                    {item.subtitle2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-(--an-appoint-screen-header-text-color) font-(family-name:--an-appoint-screen-font-family) text-base font-medium">Symptoms</p>
            <div className="flex gap-2">
            {symptoms.map((item, index) => (
                <div key={index} className="flex px-2 py-1 rounded-xs bg-(--an-appoint-screen-symptom-bg-color) text-(--an-appoint-screen-icon-subtitle-color) overflow-ellipsis overflow-hidden font-(family-name:--an-appoint-screen-font-family) text-sm font-normal">
                {item.title}
                </div>
            ))}
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-(--an-appoint-screen-header-text-color) font-(family-name:--an-appoint-screen-font-family) text-base font-medium">Description</p>
            <p className="text-(--an-appoint-screen-desc-color) font-(family-name:--an-appoint-screen-font-family) text-base font-medium">{description}</p>
        </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
