import Image from "next/image";
import { Inter } from "next/font/google";
import { DropdownMenuHamster } from "@/reactComponents/Dropdown";
import { frame, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-full grid grid-rows-7 bg-custom-blue relative">
      <motion.div
        className="box row-start-3 row-end-4 place-self-center absolute top-80"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <DropdownMenuHamster />
      </motion.div>
    </main>
  );
}
