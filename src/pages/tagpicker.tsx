import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";
import { useState } from "react";
import TagPicker from "@/react-components/TagPicker";

const TagPickerPage = () => {
  return (
    <main className="h-screen w-full ">
      <TagPicker />
    </main>
  );
};

export default TagPickerPage;
