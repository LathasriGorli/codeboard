import { useEffect, useState } from "react";
import { AlmanaIcon } from "../icons/AlmanaIcon";
import { OTPEdit } from "../icons/OTPEdit";
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

type Props = {
  image: string;
  email: string;
  otp: string;
  message: string;
  loginEmail: string;
};

export function Login({ image, email, otp, message, loginEmail }: Props) {
  const [showOtp, setShowOtp] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [otpValue, setOtpValue] = useState("");

  useEffect(() => {
    if (showOtp && secondsLeft > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showOtp, secondsLeft]);

  const handleContinue = () => {
    setShowOtp(true);
    setSecondsLeft(30);
  };

  const handleResend = () => {
    setSecondsLeft(30);
  };

  function maskEmail(email: string): string {
    const [username, domain] = email.split("@");
    if (!username || !domain) return email;
  
    const prefix = username.slice(0, 2);
    const suffix = username.slice(-2);
    const maskedLength = Math.max(username.length - 4, 1); 
    const masked = "*".repeat(maskedLength);
  
    return `${prefix}${masked}${suffix}@${domain}`;
  }
  
  
  const EmailCard = (
    <Card className="w-[400px] rounded-none shadow-none bg-transparent border-none relative z-10">
      <CardHeader className="gap-4">
        <CardTitle>
          <p className="text-(--an-login-text-color) text-start font-(family-name:--an-login-font-family) text-(length:--an-login-text-size) font-normal">
            Log in to
            <span className="text-(--an-login-almana-color) font-(family-name:--an-login-font-family) text-(length:--an-login-login-text-size) font-semibold">
              {" "}
              Almana Hospitals
            </span>
          </p>
        </CardTitle>
        <CardDescription className="text-(--an-login-description-color) font-(family-name:--an-login-font-family) text-sm font-normal pl-8 w-80 text-center">
          Enter your email to continue. <br />
          We'll send you a one-time password (OTP) for verification.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col items-start mt-6 space-y-2">
          <div className="w-85">
            <Input
              id="email"
              placeholder="Email"
              className="rounded-lg border border-(--an-login-input-border-color) bg-(--an-login-input-background) placeholder:text-(--an-login-text-color) text-sm font-normal font-(family-name:--an-login-font-family) h-11 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
            />
            {email && (
              <p className="text-xs text-red-500 font-(family-name:--an-login-font-family)">
                {email}
              </p>
            )}
          </div>
          {message && (
            <p className="text-xs text-red-500 font-(family-name:--an-login-font-family)">
              {message}
            </p>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Button
          variant="outline"
          onClick={handleContinue}
          className="rounded-lg bg-(--an-login-signin-background) text-(--an-login-signin-text-color) text-sm font-normal font-(family-name:--an-login-font-family) w-85 h-11 hover:bg-(--an-login-signin-background) hover:text-(--an-login-signin-text-color) cursor-pointer"
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );

  const OTPCard = (
    <Card className="w-[400px] rounded-none shadow-none bg-transparent border-none relative z-10 gap-6">
      <CardHeader className="gap-3 flex flex-col items-center justify-center">
        <CardTitle>
          <p className="text-(--an-otp-text-color) text-center font-(family-name:--an-otp-font-family) text-(length:--an-otp-text-size) font-normal">
            OTP Verification
          </p>
        </CardTitle>
        <CardDescription className="text-[#6A7185] font-(family-name:--an-otp-font-family) text-xs font-normal text-center">
          Enter the OTP sent to your email ends <br /> with{" "}
          <span className="text-(--an-otp-text-color) inline-flex items-center">
            {maskEmail(loginEmail)}
            <Button
              variant="outline"
              className="border-none shadow-none w-0 h-0 cursor-pointer"
              onClick={() => {
                setShowOtp(false) , 
                setOtpValue("")
              }}
            >
              <OTPEdit />
            </Button>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 pl-6">
        <InputOTP maxLength={4} value={otpValue} onChange={(val) => setOtpValue(val)}>
          {[0, 1, 2, 3].map((i) => (
            <InputOTPGroup key={i}>
              <InputOTPSlot
                index={i}
                className="bg-(--an-otp-input-background) w-13 h-13 rounded border border-(--an-otp-input-border-color) mr-5"
              />
            </InputOTPGroup>
          ))}
        </InputOTP>
        {otp && (
          <p className="text-xs text-red-500 pt-1 font-(family-name:--an-login-font-family) w-full text-center">
            {otp}
          </p>
        )}
        <p className="text-[#6A7185] text-center font-(family-name:--an-otp-font-family) text-sm font-normal">
          Didn't receive OTP? <br />
          <Button
            variant="outline"
            className="text-(--an-otp-resend-color) font-medium border-none shadow-none p-0 w-0 h-0 cursor-pointer hover:text-(--an-otp-resend-color)"
            onClick={secondsLeft === 0 ? handleResend : undefined}
          >
            Resend OTP{" "}
            <span className="text-orange-300">
              {secondsLeft > 0 && `(${secondsLeft}s)`}
            </span>
          </Button>
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button
          variant="outline"
          className="rounded-lg bg-(--an-otp-verify-background) text-(--an-otp-verify-text-color) text-sm font-normal font-(family-name:--an-otp-font-family) w-85 h-11 hover:bg-(--an-otp-verify-background) hover:text-(--an-otp-verify-text-color) cursor-pointer"
        >
          Verify
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="flex justify-between w-screen h-screen md:flex-row">
      <div className="flex flex-col w-1/2 gap-24 relative overflow-hidden">
        <AlmanaIcon className="w-32 h-12 m-2 md:w-40 md:h-15" />
        <div className="flex justify-center relative">
          <div className={showOtp ? "hidden" : "block"}>{EmailCard}</div>
          <div className={showOtp ? "block" : "hidden"}>{OTPCard}</div>
        </div>
        <div className="absolute -bottom-10 -left-1 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-tr from-(--an-otp-footer-bg) to-(--an-otp-footer-bg) blur-2xl rotate-[37.723deg]" />
      </div>
      <div className="w-auto">
        <img
          src={image}
          alt="Login visual"
          className="w-auto h-full relative rounded-lg py-1 px-1"
        />
      </div>
    </div>
  );
}
