import { ReactNode } from "react";
import { Icons } from "@/react-components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";

type MotionWrapperScaleTiltProps = {
  children: ReactNode;
};

const MotionWrapperScaleTilt: React.FC<MotionWrapperScaleTiltProps> = ({
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: "7deg" }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      {children}
    </motion.div>
  );
};

type MotionWrapperScaleProps = {
  children: ReactNode;
};

const MotionWrapperScale: React.FC<MotionWrapperScaleProps> = ({
  children,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, backgroundColor: "transparent" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  );
};

type MotionWrapperTapRotateProps = {
  children: ReactNode;
  className?: string;
};

const MotionWrapperTapRotate: React.FC<MotionWrapperTapRotateProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div whileTap={{ backgroundColor: "transparent" }}>
      {children}
    </motion.div>
  );
};

interface PaymentMethoCardProps {
  className?: string;
  style?: React.CSSProperties;
}

const PaymentMethodCard: React.FC<PaymentMethoCardProps> = ({ style }) => {
  return (
    <main
      className="h-screen w-full grid place-content-center relative bg-gradient-to-b from-blue-500 to-violet-500 snap-center"
      style={style}
    >
      <Card className="w-[24rem]">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Add a new payment method to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
            <div>
              <MotionWrapperScaleTilt>
                <RadioGroupItem
                  value="card"
                  id="card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                  Card
                </Label>
              </MotionWrapperScaleTilt>
            </div>
            <div>
              <MotionWrapperScaleTilt>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Icons.paypal className="mb-3 h-6 w-6" />
                  Paypal
                </Label>
              </MotionWrapperScaleTilt>
            </div>
            <div>
              <MotionWrapperScaleTilt>
                <RadioGroupItem
                  value="apple"
                  id="apple"
                  className="peer sr-only"
                />

                <Label
                  htmlFor="apple"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Icons.apple className="mb-3 h-6 w-6" />
                  Apple
                </Label>
              </MotionWrapperScaleTilt>
            </div>
          </RadioGroup>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="First Last" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Card number</Label>
            <Input id="number" placeholder="" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="month">Expires</Label>
              <Select>
                <SelectTrigger id="month">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <MotionWrapperScale>
                    <SelectItem value="1">January</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="2">February</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="3">March</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="4">April</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="5">May</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="6">June</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="7">July</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="8">August</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="9">September</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="10">October</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="11">November</SelectItem>
                  </MotionWrapperScale>
                  <MotionWrapperScale>
                    <SelectItem value="12">December</SelectItem>
                  </MotionWrapperScale>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="year">Year</Label>
              <Select>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>

                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <MotionWrapperScale>
                      <SelectItem
                        key={i}
                        value={`${new Date().getFullYear() + i}`}
                      >
                        {new Date().getFullYear() + i}
                      </SelectItem>
                    </MotionWrapperScale>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="CVC" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default PaymentMethodCard;
