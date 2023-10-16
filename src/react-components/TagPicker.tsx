import React, { useState, useEffect } from "react";
import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";

const TagPicker = () => {
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
    "Table Tennis", // Add more sports if needed
  ]);

  const handleBadgeSelect = (badgeName: string) => {
    if (!selectedBadges.includes(badgeName)) {
      setSelectedBadges([...selectedBadges, badgeName]);
    }
  };

  const handleBadgeDeselect = (badgeName: string) => {
    setSelectedBadges(selectedBadges.filter((badge) => badge !== badgeName));
    console.log("badge deselected");
  };

  useEffect(() => {
    console.log("TagPicker rendered!");
  });

  return (
    <main className="h-screen w-full grid grid-cols-10 grid-rows-6 gap-16 relative bg-black">
      <TagCardLeft
        onBadgeSelect={handleBadgeSelect}
        onBadgeDeselect={handleBadgeDeselect}
        selectedBadges={selectedBadges}
      />
      <TagCardRight
        selectedBadges={selectedBadges}
        onBadgeDeselect={handleBadgeDeselect}
      />
    </main>
  );
};

export default TagPicker;
