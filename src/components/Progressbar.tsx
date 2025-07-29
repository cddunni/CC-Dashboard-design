import { useMemo } from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {

  const colorCode = useMemo(() => {
    if (percentage < 30) {
      return "bg-brand-red";
    } else if (percentage < 50) {
      return "bg-brand-warning";
    } else {
      return "bg-brand-green";
    }
  }, [percentage]);

  return (
    <div className="h-2 relative" title={`${percentage.toFixed(2)}%`}>
      <div
        className={`${colorCode} h-full rounded-l-full relative z-[2]`}
        style={{
          width: `${percentage}%`,
        }}
      />
      <div className={`${colorCode} opacity-15 w-full h-full rounded-full absolute top-0 left-0 z-[1]`} />
    </div>
  );
};

export default ProgressBar;
