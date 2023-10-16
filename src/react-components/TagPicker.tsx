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
    <main className="h-screen w-full grid grid-cols-10 grid-rows-6 gap-16 relative bg-black">
      <TagCardLeft
        onBadgeSelect={handleBadgeSelect}
        onBadgeDeselect={handleBadgeDeselect}
        selectedBadges={selectedBadges}
        orderedDeselectedBadges={orderedDeselectedBadges} // Pass the orderedDeselectedBadges to TagCardLeft
      />
      <TagCardRight
        selectedBadges={selectedBadges}
        onBadgeDeselect={handleBadgeDeselect}
      />
    </main>
  );
};

export default TagPicker;
