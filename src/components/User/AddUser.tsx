import * as React from "react";

import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
export function CardWithAddUser() {
  const [dob, setDob] = React.useState<Date>();
  const [doj, setDoj] = React.useState<Date>();
  return (
    <Card className="w-[900px] mx-10 my-10 shadow-md  bg-(--an-color-text-Adduser) ">
      <CardHeader>
        <CardTitle className="flex">
          <div className="font-[urbanist] text-(--an-color-text-cardtitlec) text-(length:--an-text-cardtitle-font-sizec) leading-(--an-text-cardtitle-line-heightc) font-(--an-text-cardtitle-font-weightc) ">
          Add User
          </div>
        </CardTitle>
        <CardDescription className="capitalize mt-8 ">
          <div className="font-[urbanist] text-(--an-color-text-cardtitlec) text-(length:--an-text-cardD-font-size) leading-(--an-text-cardD-line-height) font-(--an-text-cardtitle-font-weightc) ">
            Personal Details
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <Label htmlFor="firstName">
                <div className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight) ">
                  First Name
                </div>
              </Label>
              <input
                id="firstName"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div>
              <Label htmlFor="lastName">
                <div className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Last Name
                </div>
              </Label>
              <input
                id="lastName"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div>
              <Label htmlFor="email">
                <div className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Email Address
                </div>
              </Label>
              <input
                id="email"
                type="email"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div>
              <Label htmlFor="mobile">
                <div className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Mobile Number
                </div>
              </Label>
              <input
                id="mobile"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div>
              <Label htmlFor="dob" className="capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  DOB
              </Label>
              <div className="relative w-full">
                <input
                  readOnly
                  value={dob ? format(dob, "PPP") : ""}
                  placeholder="mm/dd/yyyy"
                  className="w-full h-9 px-3 pr-10 border-b border-black/10 focus:outline-none font-[ urbanist] text-(--an-text-doj-color) text-(length:--an-text-firstN-font-size) font-(--an-text-cardtitle-font-weightc) leading-(--an-text-firstN-line-height)"
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      <CalendarIcon className="h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={dob}
                      onSelect={setDob}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div>
              <Label htmlFor="doj" className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Date of Joining
              </Label>
              <div className="relative w-full">
                <input
                  readOnly
                  value={doj ? format(doj, "PPP") : ""}
                  placeholder="mm/dd/yyyy"
                  className="w-full h-9 px-3 pr-10 border-b border-black/10 focus:outline-none font-[urbanist] text-(--an-text-doj-color) text-(length:--an-text-firstN-font-size) font-(--an-text-cardtitle-font-weightc) leading-(--an-text-firstN-line-height)"
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      <CalendarIcon className="h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={doj}
                      onSelect={setDoj}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="col-span-2">
              <Label htmlFor="designation">
                <div className=" capitalize font-[urbanist] text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Designation
                </div>
              </Label>
              <input
                id="designation"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <Button variant="outline">
          <div className=" capitalize font-[urbanist] text-(--an-color-text-cardfooter) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
            Cancel
          </div>
        </Button>
        <Button className="bg-red-600 text-white hover:bg-red-700">
          <div className=" capitalize font-[urbanist] text-(--an-color-text-Adduser) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
            Add User
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}
