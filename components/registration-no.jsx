import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

function RegistrationNo(props) {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl"></CardTitle>
        <CardDescription className="text-green-800 font-bold"></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Personal Name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Country</Label>
            <Input id="name" placeholder="Country" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company-web">Company</Label>
            <Input id="company-web" placeholder="" required />
            <Label className="text-xs">
              (Add your employer’s website address, or leave blank if you’d
              rather not say)
            </Label>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default RegistrationNo;
