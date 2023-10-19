import Image from "next/image";
import { Inter } from "next/font/google";
import { DropdownMenuHamster } from "@/react-components/DropdownnMenu";
import { frame, motion } from "framer-motion";
import DemoPaymentMethod from "./paymentmethod";
import TagPicker from "@/react-components/TagPicker";
import PaymentMethodCard from "@/react-components/PaymentMethodCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="h-screen w-full grid grid-rows-7 bg-gradient-to-r overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* <DropdownMenuHamster /> */}
      <TagPicker style={{ scrollSnapAlign: "center" }} />
      <TagPicker style={{ scrollSnapAlign: "center" }} />
      <TagPicker style={{ scrollSnapAlign: "center" }} />
      <TagPicker style={{ scrollSnapAlign: "center" }} />
      {/* <PaymentMethodCard style={{ scrollSnapAlign: 'center' }} />
    <DemoPaymentMethod style={{ scrollSnapAlign: 'center' }} /> */}
    </main>
  );
}
