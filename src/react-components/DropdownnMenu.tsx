import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import React from "react";
import { useState } from "react";

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

import { AnimatePresence, motion } from "framer-motion";

// {
//   hidden: {
//     y: "-100vh",
//     opacity: 0,
//   },
//   visible: {
//     y: "0",
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       damping: 20,
//       stiffness: 200,
//     },
//   },
//   exit: {
//     y: "-100vh",
//     opacity: 0,
//   },
// };

const dropIn = {
  hidden: { y: "-100vh" },
  visible: { y: "0" },
  exit: { y: "-100vh" },
};

export function DropdownMenuHamster() {
  return (
    <main className="h-screen w-full flex justify-center bg-gradient-to-b  from-emerald-500 to-cyan-500">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="outline"
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            Open
          </Button>
        </DropdownMenuTrigger>
        <AnimatePresence>
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            // transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                </motion.div>

                <DropdownMenuSub>
                  <motion.div
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                  </motion.div>

                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                      </motion.div>

                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                      </motion.div>

                      <DropdownMenuSeparator />

                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                      </motion.div>

                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </motion.div>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </motion.div>

              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
              </motion.div>

              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DropdownMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
                </DropdownMenuItem>
              </motion.div>

              <DropdownMenuSeparator />

              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </motion.div>
            </DropdownMenuContent>
          </motion.div>
          {/* )} */}
        </AnimatePresence>
      </DropdownMenu>
    </main>
  );
}

{
  /* ///////////////////////////////////////////////////////////
// BELOW YOU FIND A REFACTORED VERSION OF THE CODE ABOVE.
// - THE VERSION ABOVE IS NOT VERY DRY DUE TO ALL REPEATING THE MOTION.DIV WRAPPERS, BUT IT'S EASIER TO READ AND CUSTOMIZE
// - FEEL FREE TO USE WHICH EVER VERSION WORKS BEST FOR YOU
// - OR YOU CAN CUSTOMISE YOUR DROPDOWN WITH THE VERSION ABOVE AND THEN REFACTOR IT LIKE THE VERSION BELOW

// const AnimatedMenuItem = ({ 
//   icon: Icon,
//   label,
//   shortcut,
//   disabled = false,
// }) => (
//   <motion.div
//     className="box"
//     whileHover={{ scale: 1.1 }}
//     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//   >
//     <DropdownMenuItem disabled={disabled}>
//       <Icon className="mr-2 h-4 w-4" />
//       <span>{label}</span>
//       {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
//     </DropdownMenuItem>
//   </motion.div>
// );

// export function DropdownMenuHamster() {
//   const menuItems = [
//     { icon: User, label: "Profile", shortcut: "⇧⌘P" },
//     { icon: CreditCard, label: "Billing", shortcut: "⌘B" },
//     { icon: Settings, label: "Settings", shortcut: "⌘S" },
//     { icon: Keyboard, label: "Keyboard shortcuts", shortcut: "⌘K" },
//     { icon: Users, label: "Team" },
//     { icon: UserPlus, label: "Invite users" },
//     { icon: Mail, label: "Email" },
//     { icon: MessageSquare, label: "Message" },
//     { icon: PlusCircle, label: "More..." },
//     { icon: Plus, label: "New Team", shortcut: "⌘+T" },
//     { icon: Github, label: "GitHub" },
//     { icon: LifeBuoy, label: "Support" },
//     { icon: Cloud, label: "API", disabled: true },
//     { icon: LogOut, label: "Log out", shortcut: "⇧⌘Q" },
//   ];

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </DropdownMenuTrigger>
//       <AnimatePresence>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <DropdownMenuContent className="w-56">
//             <DropdownMenuLabel>My Account</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuGroup>
//               {menuItems.map((item, idx) => (
//                 <React.Fragment key={item.label}>
//                   <AnimatedMenuItem {...item} />
//                   {(idx === 3 || idx === 9 || idx === 12) && (
//                     <DropdownMenuSeparator />
//                   )}
//                 </React.Fragment>
//               ))}
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </motion.div>
//       </AnimatePresence>
//     </DropdownMenu>
//   );
// }
*/
}
