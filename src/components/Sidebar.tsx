import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { mainMenu } from "../utils/data/navigation";
import { MainMenu } from "../utils/types";
import Logo from "./Logo";
import Notifications from "./Notifications";
import { notificationsData } from "../utils/dummy";

interface SidebarProps {
  className: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const handleClick = (menu: MainMenu) => {
    if (menu.subMenu && menu.subMenu.length > 0) {
      setOpenMenus((prev) =>
        prev.includes(menu.id)
          ? prev.filter((id) => id !== menu.id)
          : [...prev, menu.id]
      );
    } else if (menu.url) {
      navigate(menu.url);
    }
  };
  const isActive = (menu: MainMenu) => {
    const { url } = menu;
    return url && location.pathname === url;
  };

  return (
    <div
      className={`${className} h-full pt-5 px-4 lg:overflow-hidden overflow-y-auto lg:pb-0 pb-6 hide-scrollbar`}
    >
      <Logo className="space-x-2 items-center pl-4 lg:flex hidden" />

      <div className="lg:my-6">
        {mainMenu.map((menu) => (
          <div key={menu.id} className="">
            <div
              className={`flex justify-between items-center py-2 cursor-pointer px-4 rounded mb-1 ${
                isActive(menu) ? "border bg-white" : ""
              }`}
              onClick={() => handleClick(menu)}
            >
              <div className="flex items-center gap-2">
                <Icon icon={menu.icon} width="14" height="14" />
                <span className="font-semibold text-sm">{menu.label}</span>
              </div>
              {menu.subMenu && !!menu?.subMenu.length && (
                <Icon
                  icon="iconamoon:arrow-down-2-thin"
                  width="20"
                  height="20"
                />
              )}
            </div>

            {/* Submenu options */}
            {menu.subMenu &&
              menu.subMenu.length > 0 &&
              openMenus.includes(menu.id) && (
                <div className="ml-6 space-y-1">
                  {menu.subMenu.map((sub) => (
                    <div
                      key={sub.id}
                      className="cursor-pointer text-xs flex items-center gap-2 py-0.5"
                      onClick={() => sub.url && navigate(sub.url)}
                    >
                      <span>{sub.label}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>

      <div className="border-[1.5px] rounded-md px-4 py-3 bg-white">
        <p className="text-sm font-extrabold">Upgrade to Pro</p>
        <p className="text-xs font-medium mt-2">
          Are you looking for more features? Check out our Pro version
        </p>
        <button className="mt-4 px-3 py-2 text-xs font-bold flex items-center space-x-1 border border-black rounded bg-[#D8FB99]">
          <Icon icon="si:arrow-right-line" width={20} height={20} />
          <span>Upgrade Now</span>
        </button>
      </div>

      <Notifications data={notificationsData} className="lg:hidden flex space-x-1 mt-6" />
    </div>
  );
};

export default Sidebar;
