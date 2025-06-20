import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { BlueIcon } from "~/components/icons/Signin/Blue";
import { OrangeIcon } from "~/components/icons/Signin/Orange";

export function UserType() {
    return (
      <Card className="p-4 sm:p-6 w-full max-w-[500px] border-none shadow-none font-[urbanist]">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-base text-[#000] text-center font-medium">
            Please select your user type.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Resident/Citizen */}
            <Button
              variant="outline"
              className="h-auto min-h-[200px] flex flex-col items-center justify-start gap-2 border-2 px-3 py-4 border-[rgba(0,168,164,0.50)] rounded-lg text-black text-center whitespace-normal overflow-hidden"
            >
              <BlueIcon className="!w-8 !h-8" />
              <p className="text-sm font-medium">Register as Resident/Citizen</p>
              <p className="text-sm text-[#828282] font-normal leading-5">
                Become a Citizen and unlock exclusive benefits designed just for you. Enjoy a quick registration process that connects you to vital resources.
              </p>
            </Button>
  
            {/* Visitor */}
            <Button
              variant="outline"
              className="h-auto min-h-[200px] flex flex-col items-center justify-start gap-2 border-2 px-3 py-4 border-[rgba(255,108,25,0.50)] rounded-lg text-black text-center whitespace-normal overflow-hidden"
            >
              <OrangeIcon className="!w-8 !h-8" />
              <p className="text-sm font-medium">Register as Visitor</p>
              <p className="text-sm text-[#828282] font-normal leading-5">
                Register as a visitor to access exclusive content and connect with our community. Sign up today!
              </p>
            </Button>
          </div>
  
          <Button className="bg-[#035B64] text-white w-full h-11 rounded-lg text-sm font-normal hover:bg-[#035B64]">
            Create an Account
          </Button>
        </div>
      </Card>
    );
}
