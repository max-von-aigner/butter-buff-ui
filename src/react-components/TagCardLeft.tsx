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
    <Card className=" col-start-4 col-span-2 row-start-2 row-span-3">
      <CardHeader>
        <CardTitle className=" text-center">Select Items!</CardTitle>
        <CardDescription className=" text-center">
          Pick all the items, you want to add
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
        ]
          .filter((sport) => !selectedBadges.includes(sport)) // Filtering out the selected badges
          .map((sport) => (
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
