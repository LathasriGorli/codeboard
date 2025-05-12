import * as React from "react";
import { Button } from "../ui/button";
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
  return (
    <Card className="w-[900px] mx-10 my-10 shadow-md  bg-(--an-color-text-Adduser) ">
      <CardHeader>
        <CardTitle className="font-(family-name:--an-card-font) text-(--an-color-text-cardtitlec) text-(length:--an-text-cardtitle-font-sizec) leading-(--an-text-cardtitle-line-heightc) font-(--an-text-cardtitle-font-weightc)  ">
          Add User
        </CardTitle>
        <CardDescription className="capitalize mt-8 ">
          <div className="font-(family-name:--an-card-font) text-(--an-color-text-cardtitlec) text-(length:--an-text-cardD-font-size) leading-(--an-text-cardD-line-height) font-(--an-text-cardD-line-height) ">
            Personal Details
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <Label htmlFor="firstName">
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight) ">
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
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
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
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
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
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Mobile Number
                </div>
              </Label>
              <input
                id="mobile"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div>
              <Label htmlFor="dob">
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  DOB
                </div>
              </Label>
              <input
                id="dob"
                type="date"
                placeholder="mm/dd/yyyy"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div>
              <Label htmlFor="doj">
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
                  Date of Joining
                </div>
              </Label>
              <input
                id="doj"
                type="date"
                placeholder=" mm/dd/yyyy"
                className="w-full h-7 px-2 border-b border-black/10 focus:outline-none"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="designation">
                <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-firstN) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
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
          <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-cardfooter) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
            Cancel
          </div>
        </Button>
        <Button className="bg-red-600 text-white hover:bg-red-700">
          <div className=" capitalize font-(family-name:--an-card-font) text-(--an-color-text-Adduser) text-(length:--an-text-firstN-font-size) leading-(--an-text-firstN-line-height) font-(--an-text-firstN-font-weight)">
            Add User
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}
