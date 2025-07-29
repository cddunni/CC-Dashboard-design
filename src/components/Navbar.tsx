import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { Icon } from "@iconify/react";
import Sidebar from "./Sidebar";
import Notifications from "./Notifications";
import { notificationsData } from "../utils/dummy";
import { AnimatePresence, motion } from "framer-motion";

interface Navbar {
  toggleMobileMenu: () => void;
  isMobileSideBarOpen: boolean;
}

const Navbar = ({ toggleMobileMenu, isMobileSideBarOpen }: Navbar) => {
  return (
    <header
      className="border-b-[1.5px] h-[70px] md:px-6 px-4 py-3 border-black flex justify-between"
    >
      <Logo className="flex space-x-2 items-center lg:hidden" />

      <div className="md:block hidden">
        <SearchInput
          id="search"
          name="search"
          placeholder="Search..."
          onChange={() => {}}
        />
      </div>

      <Notifications
        data={notificationsData}
        className="lg:flex space-x-4 hidden"
      />

      <button className="lg:hidden block p-1" onClick={toggleMobileMenu}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isMobileSideBarOpen ? "close" : "menu"}
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon
              icon={
                isMobileSideBarOpen
                  ? "icon-park-outline:close"
                  : "hugeicons:menu-02"
              }
              width={36}
              height={36}
            />
          </motion.div>
        </AnimatePresence>
      </button>

      {isMobileSideBarOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0", transition: { duration: 0.5 } }}
            exit={{ x: "-100%" }}
            className="fixed inset-0 z-40 bg-opacity-50 lg:hidden h-[calc(100%-70px)] top-[70px]"
          >
            <Sidebar className="w-64 h-full bg-white shadow-lg" />
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Navbar;
