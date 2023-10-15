import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Badge } from "@/components/ui/badge";

import { useState } from "react";

interface TagCardProps {
  className?: string;
}

const TagCard: React.FC<
  TagCardProps & {
    onBadgeSelect: (badgeName: string) => void;
    onBadgeDeselect: (badgeName: string) => void;
    selectedBadges: string[];
  }
> = ({ className, onBadgeSelect, onBadgeDeselect, selectedBadges }) => {
  const handleBadgeClick = (badgeName: string) => {
    if (selectedBadges.includes(badgeName)) {
      onBadgeDeselect(badgeName);
    } else {
      onBadgeSelect(badgeName);
    }
  };

  return (
    <Card className="w-[23rem] h-[30rem] top-80 absolute">
      <CardHeader>
        <CardTitle className=" text-center">Select your Sports!</CardTitle>
        <CardDescription className=" text-center">
          Select the topics, you want to learn more about
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        {[
          "Basketball",
          "Football",
          "Tennis",
          "Volleyball",
          "Baseball",
          "American Football",
          "Cricket",
          "Table Tennis" /* Add more sports */,
        ].map((sport) => (
          <Badge
            key={sport}
            variant={selectedBadges.includes(sport) ? "default" : "secondary"}
            className={`text-lg m-2 cursor-pointer ${
              selectedBadges.includes(sport) && "opacity-50"
            }`}
            onClick={() => handleBadgeClick(sport)}
          >
            {sport}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default TagCard;
