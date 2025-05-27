import { AlmanaIcon } from "../icons/AlmanaIcon";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

type Props = {
  image: string;
  email: string;
  password: string;
  message: string;
};

export function Login({ image, email, password, message }: Props) {
  return (
    <div className="flex justify-between w-screen h-screen md:flex-row">
      <div className="flex flex-col w-1/2 gap-16 relative overflow-hidden">
        <AlmanaIcon className={"w-32 h-12 m-2 md:w-40 md:h-15"} />
        <div className="flex justify-center w-full">
        <Card className=" w-[400px] rounded-none shadow-none gap-8 bg-transparent border-none relative z-10">
          <CardHeader className="gap-2">
            <CardTitle>
              <p className="text-(--an-login-text-color) text-center font-(family-name:--an-login-font-family) text-(length:--an-login-login-text-size) font-normal">
                Log in to
                <span className="text-(--an-login-almana-color) font-(family-name:--an-login-font-family) text-(length:--an-login-login-text-size) font-nromal font-semibold">
                  {" "}
                  Almana Hospitals
                </span>
              </p>
            </CardTitle>
            <CardDescription className="text-(--an-login-description-color) text-center font-(family-name:--an-login-font-family) text-xs font-normal w-[354px] p-1">
              Welcome back! Please log in to your Almana Hospitals account to
              proceed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <Input
                    id="email"
                    placeholder="Email"
                    className="rounded-lg border-1 border-(--an-login-input-border-color) bg-(--an-login-input-background) placeholder:text-(--an-login-text-color) text-sm font-normal font-(family-name:--an-login-font-family) h-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <p className="text-xs text-red-500 pl-1 pt-1 font-(family-name:--an-login-font-family)">
                    {email}
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  <Input
                    id="password"
                    placeholder="Password"
                    className="rounded-lg border border-(--an-login-input-border-color) bg-(--an-login-input-background) placeholder:text-(--an-login-text-color) text-base font-normal font-(family-name:--an-login-font-family) h-8 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <p className="text-xs text-red-500 pl-1 pt-1 font-(family-name:--an-login-font-family)">
                    {password}
                  </p>
                </div>
                <p className="text-xs text-red-500 font-(family-name:--an-login-font-family)">
                    {message}
                </p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center self-stretch gap-4">
            <Button
              variant="outline"
              className="rounded-lg bg-(--an-login-signin-background) text-(--an-login-signin-text-color) text-center text-sm font-normal font-(family-name:--an-login-font-family) w-full h-8 hover:bg-(--an-login-signin-background) hover:text-(--an-login-signin-text-color) cursor-pointer"
            >
              Sign in
            </Button>
            <span className="text-(--an-login-forgot-text-color) text-center font-(family-name:--an-login-font-family) text-sm font-normal">
              Forgot password? {"  "}
              <button className="text-(--an-login-text-color) text-center font-(family-name:--an-login-font-family) text-sm font-medium underline underline-offset-auto cursor-pointer decoration-from-font">
                Reset
              </button>{" "}
              <span className="text-(--an-login-text-color) text-center font-(family-name:--an-login-font-family) text-sm font-medium">it</span>
            </span>
          </CardFooter>
        </Card>
        </div>
        
        <div className="absolute -bottom-10 -left-1 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-tr from-(--an-login-footer-bg) to-(--an-login-footer-bg) blur-2xl rotate-37.723deg"></div>
      </div>
      <div className="w-auto">
        <img
          src={image}
          alt=""
          className="w-auto h-full relative rounded-lg py-1 px-1"
        />
      </div>
    </div>
  );
}