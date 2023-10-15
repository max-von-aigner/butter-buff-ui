import React, { useState } from "react";
import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";

const TagPicker = () => {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const handleBadgeSelect = (badgeName: string) => {
    if (!selectedBadges.includes(badgeName)) {
      setSelectedBadges([...selectedBadges, badgeName]);
    }
  };

  const handleBadgeDeselect = (badgeName: string) => {
    setSelectedBadges(selectedBadges.filter((badge) => badge !== badgeName));
  };

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
