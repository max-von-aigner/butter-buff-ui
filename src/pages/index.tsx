import { Inter } from "next/font/google";
import DemoPaymentMethod from "./paymentmethod";
import TagPicker from "@/react-components/TagPicker";
import PaymentMethodCard from "@/react-components/PaymentMethodCard";
import DropdownMenuAnimated from "@/react-components/DropdownMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <DropdownMenuAnimated />
      <TagPicker />
      <PaymentMethodCard />
    </main>
  );
}
