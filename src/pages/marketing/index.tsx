import { useState } from "react";
import DateFilter from "../../components/DateFilter";
import SummaryCard from "./SummaryCard";
import { LineChart, StackedBarChart } from "../../components/charts";
import {
  trafficSourceData,
  acquisitionVersusCostData,
  budgetByPlatform,
} from "../../utils/dummy";
import { Icon } from "@iconify/react";
import { formatCurrency } from "../../utils/functions/generators";
import { ProgressBar } from "../../components";

const Marketing = () => {
  const [currentDateFilter, setCurrentDateFilter] = useState(7);
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <p className="text-lg font-bold">Marketing</p>
        <DateFilter
          handleDateFilter={setCurrentDateFilter}
          selectedFilter={currentDateFilter}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <SummaryCard
            title="Total Spend"
            value="$8,765"
            previous="$10,234"
            progress={-14.32}
            icon="bi:cash"
          />
          <SummaryCard
            title="Visitor"
            value="14,321"
            previous="12,543"
            progress={14.23}
            icon="bi:people"
          />
          <SummaryCard
            title="Acquisition"
            value="$1,023"
            previous="876"
            progress={16.73}
            icon="simple-line-icons:check"
          />
          <SummaryCard
            title="Revenue"
            value="$18,765"
            previous="$15,432"
            progress={21.67}
            icon="streamline-plump:dollar-coin"
          />
        </div>
        <div className="bg-white border-[1.5px] border-black rounded p-4 text-black font-medium">
          <p className="font-semibold mb-2">Acquisition vs Cost</p>
          <LineChart
            labels={acquisitionVersusCostData.labels}
            datasets={acquisitionVersusCostData.datasets}
          />
        </div>
        <div className="bg-white border-[1.5px] border-black rounded p-4">
          <p className="font-semibold mb-2">Traffic Source</p>
          <StackedBarChart data={trafficSourceData} />
        </div>
        <div className="bg-white border-[1.5px] border-black rounded p-4 text-black font-medium">
          <p className="font-semibold mb-2">Budget by Platform</p>
          <div className="flex flex-col space-y-2">
            {budgetByPlatform.map((budget) => (
              <div key={budget.name} className="flex space-x-4 items-center">
                <Icon icon={budget.icon} width={30} height={30} />
                <div className="w-full">
                  <div className="text-sm font-semibold flex justify-between mb-1.5">
                    <p>Remaining {formatCurrency(budget.remaining)}</p>
                    <p>{budget.percentage}%</p>
                  </div>
                  <ProgressBar percentage={budget.percentage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
