export const dateFilters = [
  {
    label: "7 days",
    value: 7,
  },
  {
    label: "14 days",
    value: 14,
  },
  {
    label: "1 month",
    value: 30,
  },
];

export const acquisitionVersusCostYScale = {
  responsive: true,
  animation: { duration: 1000 },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y1: {
      type: "linear" as const,
      position: "left" as const,
      beginAtZero: true,
      min: 0,
      max: 800,
      ticks: {
        stepSize: 100,
      },
      title: {
        display: false,
        text: "acquisition",
      },
    },
    y2: {
      type: "linear" as const,
      position: "right" as const,
      beginAtZero: true,
      min: 0,
      max: 6000,
      ticks: {
        stepSize: 1000,
        callback: (value: number | string) => `${value}$`,
      },
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: false,
        text: "cost ($)",
      },
    },
  },
};
