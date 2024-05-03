import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrationYes from "@/components/registration-yes";
import RegistrationNo from "@/components/registration-no";

const RegistrationPage = (props) => {
  return (
    <div>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-green-800 font-bold text-2xl">
            Registration
          </CardTitle>
          <CardDescription className="text-center text-green-800 font-bold">
            Did your employer ask you to fill out this info? [yes / no]
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="yes">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                value="Yes"
              >
                Yes
              </TabsTrigger>
              <TabsTrigger
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                value="No"
              >
                No
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Yes">
              <RegistrationYes />
            </TabsContent>
            <TabsContent value="No">
              <RegistrationNo />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationPage;
