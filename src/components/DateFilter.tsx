import { dateFilters } from "../utils/constants";

interface DateFilterProps {
    handleDateFilter: (value: number) => void;
    selectedFilter: number
}

const DateFilter = ({ handleDateFilter, selectedFilter }: DateFilterProps) => {
  return (
    <div className="flex shadow-custom rounded-md border">
      {dateFilters.map(({ label, value }) => (
        <button
          key={`date-filter-${value}`}
          className={`${selectedFilter === value ? 'text-brand-green' : 'text-black'} border-r border-black px-4 py-1.5 font-medium md:text-sm text-xs`}
          onClick={() => {
            handleDateFilter(value);
          }}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default DateFilter;
