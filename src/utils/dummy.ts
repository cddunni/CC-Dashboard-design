export const trafficSourceData = {
  labels: [
    "March 1",
    "March 2",
    "March 3",
    "March 4",
    "March 5",
    "March 6",
    "March 7",
  ],
  datasets: [
    {
      label: "Product A",
      data: [70, 40, 30, 80, 75, 65, 75],
      backgroundColor: "#83CC1C",
    },
    {
      label: "Product B",
      data: [25, 15, 20, 20, 10, 15, 10],
      backgroundColor: "#9ED655",
    },
    {
      label: "Product C",
      data: [25, 25, 35, 35, 20, 20, 15],
      backgroundColor: "#B7E183",
    },
    {
      label: "Product D",
      data: [10, 5, 10, 15, 20, 10, 10],
      backgroundColor: "#D0ECAE",
    },
    {
      label: "Product $",
      data: [30, 30, 35, 35, 30, 35, 30],
      backgroundColor: "#E7F5D7",
    },
  ],
};

export const acquisitionVersusCostData = {
  labels: [
    "March 1",
    "March 2",
    "March 3",
    "March 4",
    "March 5",
    "March 6",
    "March 7",
  ],
  datasets: [
    {
      label: "acquisition",
      data: [180, 310, 250, 370, 450, 320, 300],
      borderColor: "#64A30C",
      backgroundColor: "#64A30C",
    },
    {
      label: "cost",
      data: [1880, 1250, 2480, 3800, 1950, 4000, 3250],
      borderColor: "#60A5FA",
      backgroundColor: "#60A5FA",
    },
  ],
};

export const budgetByPlatform = [
  {
    name: "facebook",
    remaining: 12345,
    percentage: 60,
    icon: "ic:outline-facebook",
  },
  {
    name: "twitter",
    remaining: 1543,
    percentage: 86,
    icon: "ri:twitter-x-line",
  },
  {
    name: "google",
    remaining: 5678,
    percentage: 67,
    icon: "ion:logo-google",
  },
  {
    name: "tiktok",
    remaining: 3456,
    percentage: 21,
    icon: "bi:tiktok",
  },
  {
    name: "bing",
    remaining: 2098,
    percentage: 35,
    icon: "lineicons:bing",
  },
];
