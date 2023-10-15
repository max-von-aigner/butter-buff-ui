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

interface TagCardProps {
  className?: string;
}

const TagCard: React.FC<TagCardProps> = ({ className }) => {
  return (
    <Card className="w-[23rem] h-[30rem] col-start-4 top-80 absolute">
      <CardHeader>
        <CardTitle className=" text-center">Select your Sports!</CardTitle>
        <CardDescription className=" text-center">
          Select the topics, you want to learn more about
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Badge variant="secondary" className="text-lg m-2 justify-center">
          Basketball
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Football
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Tennis
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Martial Arts
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Ice Hockey
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Motorsports
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          American Football
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Golf
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Volleyball
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Cricket
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Baseball
        </Badge>
        <Badge variant="secondary" className="text-lg m-2">
          Tabel Tennis
        </Badge>
      </CardContent>
    </Card>
  );
};

export default TagCard;
