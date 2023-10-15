import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";

const TagPickerPage = () => {
  return (
    <main className="h-screen w-full grid grid-cols-10 relative bg-black">
      <TagCardLeft />
      <TagCardRight />
    </main>
  );
};

export default TagPickerPage;
