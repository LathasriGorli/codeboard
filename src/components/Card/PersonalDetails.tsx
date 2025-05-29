import { DoctorProfile } from "../icons/DoctorProfile";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PersonalDetails(){
    return(
        <Card className="w-full flex items-start shadow-none rounded-lg border border-[#E1E1E1] bg-white p-2 gap-3">
            <div className="flex flex-col gap-2">
                <p className="text-[#005669] font-(family-name:--an-personal-details-font-family) text-base font-medium">Personal Details</p>
                <div className="flex flex-col gap-1 items-center justify-center rounded-sm bg-[#EDEDED] p-3">
                    <DoctorProfile />
                    <p className="text-[#828282] font-(family-name:--an-personal-details-font-family) text-sm font-medium">Profile</p>
                    <p className="text-[#005669] font-(family-name:--an-personal-details-font-family) text-sm font-medium">Upload</p>
                </div>
            </div>
            <CardContent className="p-0">
                <form className="font-(family-name:--an-personal-details-font-family) font-medium flex flex-col gap-4">
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <Label htmlFor="firstName" className="text-[#585858] text-base">First Name</Label>
                            <Input id="firstName" placeholder="Enter first name" className="rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 h-9 w-70"/>
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="lastName" className="text-[#585858] text-base">Last Name</Label>
                            <Input id="lastName" placeholder="Enter last name" className="rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 h-9 w-70"/>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <Label htmlFor="gender" className="text-[#585858] text-base">Gender</Label>
                            <Input id="gender" placeholder="Enter gender" className="rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 h-9 w-70"/>
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="dob" className="text-[#585858] text-base">DOB</Label>
                            <Input id="dob" placeholder="Enter date of birth" className="rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 h-9 w-70"/>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <Label htmlFor="gender" className="text-[#585858] text-base">Address</Label>
                            <Input id="gender" placeholder="Enter gender" className="rounded-lg border border-[#D4D4D4] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 "/>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}