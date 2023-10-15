import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";
import { useState } from "react";
import TagPicker from "@/react-components/TagPicker";

const TagPickerPage = () => {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  return (
    <main className="h-screen w-full relative bg-black">
      <TagPicker />
    </main>
  );
};

export default TagPickerPage;
