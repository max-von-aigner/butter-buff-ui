import React, { useState, useEffect } from "react";
import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";
import { easeIn, easeOut, motion } from "framer-motion";
import { type } from "os";

interface TagPickerProps {
  className?: string;
  style?: React.CSSProperties;
}

const TagPicker: React.FC<TagPickerProps> = ({ style }) => {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [orderedDeselectedBadges, setOrderedDeselectedBadges] = useState<
    string[]
  >([
    "Basketball",
    "Football",
    "Tennis",
    "Volleyball",
    "Baseball",
    "American Football",
    "Cricket",
    "Table Tennis",
  ]);

  const handleBadgeSelect = (badgeName: string) => {
    if (!selectedBadges.includes(badgeName)) {
      setSelectedBadges([...selectedBadges, badgeName]);
      // Remove badge from the orderedDeselectedBadges list when it's selected
      setOrderedDeselectedBadges((prevBadges) =>
        prevBadges.filter((badge) => badge !== badgeName)
      );
    }
  };

  const handleBadgeDeselect = (badgeName: string) => {
    setSelectedBadges((prevBadges) =>
      prevBadges.filter((badge) => badge !== badgeName)
    );
    setOrderedDeselectedBadges((prevBadges) => [...prevBadges, badgeName]);
    console.log("badge deselected");
  };

  console.log("TagPicker rendered!");

  return (
    <main
      className="h-screen w-full grid place-content-center relative bg-gradient-to-b from-cyan-500 to-blue-500 snap-center"
      style={style}
    >
      <div className="flex gap-12">
        <motion.div
          drag
          dragSnapToOrigin={true}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <TagCardLeft
            onBadgeSelect={handleBadgeSelect}
            onBadgeDeselect={handleBadgeDeselect}
            selectedBadges={selectedBadges}
            orderedDeselectedBadges={orderedDeselectedBadges} // Pass the orderedDeselectedBadges to TagCardLeft
          />
        </motion.div>
        <motion.div
          drag
          dragSnapToOrigin={true}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <TagCardRight
            selectedBadges={selectedBadges}
            onBadgeDeselect={handleBadgeDeselect}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default TagPicker;
