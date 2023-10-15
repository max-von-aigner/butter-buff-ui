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

import { motion, AnimatePresence, useSpring } from "framer-motion";

interface TagCardRightProps {
  className?: string;
  selectedBadges: string[];
  onBadgeDeselect: (badgeName: string) => void;
}

const TagCardRight: React.FC<
  TagCardRightProps & { selectedBadges: string[] }
> = ({ className, selectedBadges, onBadgeDeselect }) => {
  return (
    <Card className="col-start-6 col-span-2 row-start-2 row-span-3 ">
      <CardHeader>
        <CardTitle className="text-center">Selected Sports</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedBadges.map((badge) => (
          <AnimatePresence>
            <motion.div
              key="sport"
              // initial={{ opacity: 0 }}
              // animate={{
              //   opacity: 1,
              //   scale: [1, 1.2, 1.2, 1, 1],
              // rotate: [0, 0, 180, 180, 0],
              // borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              // }}
              // exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Badge
                key={badge}
                variant="default"
                className="text-lg m-2 cursor-pointer"
                onClick={() => onBadgeDeselect(badge)}
              >
                {badge}
              </Badge>
            </motion.div>
          </AnimatePresence>
        ))}
      </CardContent>
    </Card>
  );
};

export default TagCardRight;
