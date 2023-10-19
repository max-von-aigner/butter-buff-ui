import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: ReactNode;
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      {children}
    </motion.div>
  );
};

const DropdownMenuAnimated = () => {
  return (
    <main className="h-screen w-full grid place-content-center bg-gradient-to-b  from-emerald-500 to-cyan-500 snap-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="outline">Open</Button>
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <MotionWrapper>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </MotionWrapper>

            <MotionWrapper>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
            </MotionWrapper>

            <MotionWrapper>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </MotionWrapper>

            <MotionWrapper>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </MotionWrapper>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <MotionWrapper>
              <DropdownMenuItem>Team</DropdownMenuItem>
            </MotionWrapper>

            <MotionWrapper>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <MotionWrapper>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                    </MotionWrapper>

                    <MotionWrapper>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                    </MotionWrapper>
                    <DropdownMenuSeparator />

                    <MotionWrapper>
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </MotionWrapper>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </MotionWrapper>

            <MotionWrapper>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </MotionWrapper>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <MotionWrapper>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
          </MotionWrapper>

          <MotionWrapper>
            <DropdownMenuItem>Support</DropdownMenuItem>
          </MotionWrapper>

          <DropdownMenuItem disabled>API</DropdownMenuItem>

          <DropdownMenuSeparator />

          <MotionWrapper>
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </MotionWrapper>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};

export default DropdownMenuAnimated;
