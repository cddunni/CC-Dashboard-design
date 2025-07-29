// components/charts/LineChart.tsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { FC } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
  }[];
};

const LineChart: FC<LineChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets: datasets.map((data, index) => ({
      ...data,
      yAxisID: index === 0 ? 'y1' : 'y2',
      fill: false,
      tension: 0.3,
      pointRadius: 0,
    })),
  };

  const options = {
    responsive: true,
    animation: { duration: 1000 },
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // removes horizontal grid lines
        },
      },
      y1: {
        type: 'linear' as const,
        position: 'left' as const,
        beginAtZero: true,
        min: 0, 
        max: 800,
        ticks: {
          stepSize: 100,
        },
        title: {
          display: false,
          text: 'acquisition',
        },
      },
      y2: {
        type: 'linear' as const,
        position: 'right' as const,
        beginAtZero: true,
        min: 0,
        max: 6000,
        ticks: {
          stepSize: 1000,
        },
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: false,
          text: 'cost ($)',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
