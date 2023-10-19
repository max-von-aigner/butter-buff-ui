import Image from "next/image";
import { Inter } from "next/font/google";
import { DropdownMenuHamster } from "@/react-components/DropdownMenu";
import { frame, motion } from "framer-motion";
import DemoPaymentMethod from "./paymentmethod";
import TagPicker from "@/react-components/TagPicker";
import PaymentMethodCard from "@/react-components/PaymentMethodCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      // style={{ scrollSnapType: "y mandatory" }}
    >
      {/* <DropdownMenuHamster /> */}

      <TagPicker />
      <PaymentMethodCard />
      <DemoPaymentMethod />
    </main>
  );
}
