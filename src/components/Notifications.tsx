import Avatar from "../assets/dashboard-avatar.jpeg";
import { Icon } from "@iconify/react";

interface NotificationsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  className: string
}
const Notifications = ({ data, className }: NotificationsProps) => {
  const notifications = [
    {
      name: "settings",
      icon: "ooui:settings",
      count: data.settings_count,
    },
    {
      name: "translator",
      icon: "cil:language",
      count: data.translator_count,
    },
    {
      name: "inbox",
      icon: "bi:envelope-fill",
      count: data.inbox_count,
    },
    {
      name: "notifications",
      icon: "clarity:bell-solid",
      count: data.alert_count,
    },
  ];

  return (
    <div className={className}>
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
        <img
          src={Avatar}
          alt="man_head_down"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Notifications;
