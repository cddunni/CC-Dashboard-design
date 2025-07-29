import SearchInput from "./SearchInput";
import { Icon } from "@iconify/react";
import Avatar from "../assets/dashboard-avatar.jpeg";

const Navbar = () => {
  const notifications = [
    {
      name: "settings",
      icon: "ooui:settings",
      count: null,
    },
    {
      name: "translator",
      icon: "cil:language",
      count: null,
    },
    {
      name: "inbox",
      icon: "bi:envelope-fill",
      count: 4,
    },
    {
      name: "notifications",
      icon: "clarity:bell-solid",
      count: 1,
    },
  ];
  return (
    <header className="h-[70px] px-6 py-3 border-b-[1.5px] border-black flex justify-between">
      <SearchInput
        id="search"
        name="search"
        placeholder="Search..."
        onChange={() => {}}
      />
      <div className="flex space-x-4">
        {notifications.map((item) => (
          <div className="relative">
            <button className="rounded-full w-10 h-10 border border-black flex items-center justify-center ">
              <Icon icon={item.icon} width={18} height={18} />
            </button>
            {item.count && (
              <div className="w-5 h-5 rounded-full bg-[#FEA4A5] text-[10px] font-semibold flex items-center justify-center absolute bottom-7 left-6">
                {item.count}
              </div>
            )}
          </div>
        ))}
        <div className="w-10 h-10 border border-black rounded-full overflow-hidden">
          <img src={Avatar} alt="man_head_down" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
