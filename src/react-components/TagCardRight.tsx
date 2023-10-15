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

const TagCardRight: React.FC<TagCardProps & { selectedBadges: string[] }> = ({
  className,
  selectedBadges,
}) => {
  return (
    <Card className="w-[23rem] h-[30rem] col-start-6 top-80 absolute">
      <CardHeader>
        <CardTitle>Selected Sports</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedBadges.map((badge) => (
          <Badge key={badge} variant="default" className="text-lg m-2">
            {badge}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default TagCardRight;
