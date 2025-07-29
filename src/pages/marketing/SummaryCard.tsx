import { Icon } from "@iconify/react";

interface SummaryCardProps {
  title: string;
  value: string;
  previous: string;
  progress: number;
  icon: string;
}
const SummaryCard = ({
  title,
  value,
  previous,
  progress,
  icon,
}: SummaryCardProps) => {
  return (
    <div className="border border-black min-w-40 p-4 bg-white rounded min-h-40">
      <p className="font-semibold text-sm">{title}</p>
      <div className="flex justify-between items-center mt-1">
        <p className="text-2xl font-extrabold">{value}</p>
        <Icon icon={icon} className="text-[#7CCF00]" width={24} height={24} />
      </div>
      <div className="flex justify-between mt-1 font-bold text-extrasmall leading-3">
        <div>
          <p>Previous</p>
          <p className="">{previous}</p>
        </div>
        <div>
          <p>Progress</p>
          <p
            className={`${
              progress < 0 ? "text-brand-red" : "text-brand-green"
            }`}
          >
            {progress > 0 ? '+' : ''}{progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
