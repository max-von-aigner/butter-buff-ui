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
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

import { motion, AnimatePresence, useSpring } from "framer-motion";
import { exit } from "process";

interface TagCardProps {
  onBadgeSelect: (badgeName: string) => void;
  onBadgeDeselect: (badgeName: string) => void;
  selectedBadges: string[];
  orderedDeselectedBadges: string[];
  className?: string;
}

const TagCard: React.FC<TagCardProps> = ({
  className,
  onBadgeSelect,
  onBadgeDeselect,
  selectedBadges,
  orderedDeselectedBadges,
}) => {
  const handleBadgeClick = (badgeName: string) => {
    if (selectedBadges.includes(badgeName)) {
      onBadgeDeselect(badgeName);
    } else {
      onBadgeSelect(badgeName);
    }
  };

  // const MotionBadge = motion(Badge)

  const dropIn = {
    hidden: {
      // x: "50vw",
      opacity: 0,
      scale: 0,
    },
    visible: {
      // x: "0",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
      exit: {
        y: "-100vh",
        opacity: 0,
        scale: 0.1,
      },
    },
  };

  return (
    <Card className="  h-[32rem] w-[24rem]   bg-card">
      <CardHeader>
        <CardTitle className=" text-center text-zinc-800 ">
          Select Sports
        </CardTitle>
        <CardDescription className=" text-center">
          Pick all the sports you're interested in!
        </CardDescription>
        <Separator />
      </CardHeader>

      <CardContent>
        {orderedDeselectedBadges.map((badge) => (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.1 }}
          >
            <Badge
              key={badge}
              variant={"secondary"}
              className={`text-zinc-800 text-lg m-2 cursor-pointer`}
              onClick={() => handleBadgeClick(badge)}
            >
              {badge}
            </Badge>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TagCard;
