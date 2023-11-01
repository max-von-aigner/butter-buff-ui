import { Inter } from "next/font/google";
import DemoPaymentMethod from "./paymentmethod";
import TagPicker from "@/react-components/TagPicker";
import PaymentMethodCard from "@/react-components/PaymentMethodCard";
import DropdownMenuAnimated from "@/react-components/DropdownMenu";
import Navbar from "@/react-components/Navbar";
import NextComponentBackground from "@/react-components/NextComponentBackground";
import NextComponentBackgroundTwo from "@/react-components/2NextComponentBackground";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Reveal } from "@/react-components/Reveal";
import { AnimatedDiv } from "@/react-components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <DropdownMenuAnimated />

      <TagPicker />

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <PaymentMethodCard />
      </motion.div>
      <Navbar />
      <NextComponentBackground />
      <NextComponentBackgroundTwo />
    </main>
  );
}
