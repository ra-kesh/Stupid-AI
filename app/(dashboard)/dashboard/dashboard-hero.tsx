import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ImagePlus } from "lucide-react";
import React from "react";

const DashboardHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-x-4 py-8">
      <div className="lg:col-span-9 flex flex-col w-full h-full">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-4xl font-bold tracking-wider text-logo">
            Welcome to CupidAI
          </h2>
          <div className="flex items-center space-x-2 ">
            <Avatar className=" h-10 w-10 sm:flex border border-separator">
              <AvatarFallback className="bg-button text-logo">
                {" "}
                +5
              </AvatarFallback>
            </Avatar>

            <Button className="gap-x-4 rounded-3xl h-11 bg-button border border-separator">
              <ImagePlus />
              Invite Member
            </Button>
          </div>
        </div>
        <div className="w-full flex  flex-row justify-between overflow-scroll mt-auto">
          <Button className="gap-x-4 rounded-3xl h-11 bg-button border border-separator ">
            {/* <Image
              src={generateImageSvg}
              alt="generate an image"
              className="w-5 h-5"
            /> */}
            <span className="text-textforeground text-xs font-normal">
              Images Generated: 531
            </span>
          </Button>
          <Button className="gap-x-4 rounded-3xl h-11 bg-button border border-separator">
            {/* <Image
              src={addReactionSvg}
              alt="generate an image"
              className="w-5 h-5"
            /> */}
            <span className="text-textforeground text-xs font-normal">
              Deepfakes generated: 842
            </span>
          </Button>
          <Button className="gap-x-4 rounded-3xl h-11 bg-button border border-separator">
            {/* <Image
              src={newReleasesSvg}
              alt="generate an image"
              className="w-5 h-5"
            /> */}
            <span className="text-textforeground text-xs font-normal">
              AI Verifications generated:141
            </span>
          </Button>
          <Button className="gap-x-4 rounded-3xl h-11 bg-button border border-separator">
            {/* <Image
              src={pageInfoSvg}
              alt="generate an image"
              className="w-5 h-5"
            /> */}
            <span className="text-textforeground text-xs font-normal">
              Content Utilities used: 353
            </span>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-3 ">
        <Card className="bg-gradient-to-bl from-[#7f04e3] to-[#ff006b] border-none space-y-2">
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <CardTitle className="lg:text-lg font-medium leading-7 text-primary tracking-wide pb-0">
              Upgrade your plan
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row w-full justify-between pr-0">
            <p className="lg:text-[12px] text-foreground ">
              Enjoy the power of AI with one of our paid plans
            </p>
            <Button variant={"ghost"} className="hover:bg-inherit">
              <ArrowRight className="text-primary " />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHero;
