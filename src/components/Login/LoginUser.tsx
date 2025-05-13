import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ProfileIcon } from "../ui/loginuser-icons/profileicon";
import { EyeIcon } from "../ui/loginuser-icons/eyeicon";
import { TickIcon } from "../ui/loginuser-icons/tickicon";
import { PasswordIcon } from "../ui/loginuser-icons/passwaordicon";
// import { Eye, EyeOff, LockKeyhole } from "lucide-react";

export function CardWithLogin4() {
  return (
    <Card className="relative w-[500px] h-[650px]  mx-auto my-20 rounded-2xl overflow-hidden">
      <img
        src="/login.png"
        alt="background"
        className="absolute top-0 left-0 w-[500px] h-[650px] object-fill"
      />
      <CardHeader className="relative z-10 ">
        <CardTitle className="text-center">
          <div className="font-(family-name:--an-login-card-font-family) text-(--an-login-cardtitle-text-color) text-(length:--an-login-Cardtite-text-fontsize) font-(--an-login-cardtitle-text-weight) leading-(--an-login-cardtitle-text-height)">
            Login
          </div>
        </CardTitle>
        <CardDescription className="text-center mt-2 ">
          <div className="font-(family-name:--an-login-card-font-family) text-(--an-login-CardDescription-text-color) text-(length:--an-login-CardDescription-text-fontsize) font-(--an-login-cardtitle-text-weight) leading-(--an-login-CardDescription-text-height)">
            Description
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10  mt-3">
        <form>
          <div className="grid w-full items-center ">
            <div className="relative mt-4">
              <div className="relative flex items-center mb-2 ">
                <div className="absolute left-3 mb-3">
                  <ProfileIcon />
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="user@mail.com"
                  className="w-full pl-10 pr-10 py-3 mb-3 border-b border-black/10 focus:outline-none  font-(family-name:--an-login-card-font-family) text-(--an-login-CardDescription-text-color) text-(length:--an-login-CardContent-text-fontsize) leading-(--an-login-CardContent-text-height) font-(--an-login-cardtitle-text-weight)"
                />
                <div className="absolute right-3 -mt-4">
                  <TickIcon />
                </div>
              </div>
            </div>

            <div className="relative mt-4">
              <div className="relative flex items-center mb-2 ">
                <div className="absolute left-3 mb-3">
                  <PasswordIcon />
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  className="w-full pl-10 pr-10 py-4 mb-3 border-b border-black/10 focus:outline-none  font-(family-name:--an-login-card-font-family) text-(--an-login-CardDescription-text-color) text-(length:--an-login-CardContent-text-fontsize) leading-(--an-login-CardContent-text-height) font-(--an-login-cardtitle-text-weight)"
                />
                <div className="absolute right-3 -mt-4">
                  <EyeIcon />
                </div>
              </div>
            </div>

            <div className="self-stretch h-12 px-2.5 py-3.5 bg-sky-400 rounded-3xl inline-flex justify-center items-center mt-9">
              <button
                type="button"
                className="font-(family-name:--an-login-card-font-family) text-(--an-login-button-text-color) text-(length:--an-login-CardContent-text-fontsize) font-(--an-login-cardtitle-text-weight) leading-(--an-login-CardContent-text-height) "
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
