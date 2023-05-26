import { iChartData } from "../../Types/iCoinsData";
import "chartjs-adapter-moment";
import millify from "millify";
import "./Chart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export type iValues = {
  [key: number]: number;
};

interface iData {
  data: iChartData;
  isActive: {
    timeBtn: string;
    capitalBtn: string;
  };
  id: string | undefined;
}

const NewChart = ({ data, isActive, id }: iData): JSX.Element => {
  const [isSized, setSize] = useState<number>(window.innerWidth);
  let isData = isActive.capitalBtn === "Price" ? data.prices : data.market_caps;

  useEffect(() => {
    const reSizing = () => {
      setSize(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", reSizing);

    return () => {
      window.removeEventListener("resize", reSizing);
    };
  }, []);

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,

    scales: {
      x: {
        type: "time",
        grid: {
          display: false,
        },
      },

      y: {
        ticks: {
          color: "rgba(32, 70, 119)",
          padding: isSized <= 600 ? 1 : isSized <= 800 ? 10 : 20,
          font: {
            size: isSized <= 600 ? 8 : 14,
          },
          callback: function (label, index, labels) {
            return isActive.capitalBtn === "Price"
              ? `$${label.toLocaleString()}`
              : `$${millify(label as number)}`;
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0.5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='chart-container'>
      <Line
        data={{
          labels: isData.map((coin: iValues) => coin[0]),
          datasets: [
            {
              data: isData.map((coin: iValues) => coin[1]),
              label: `${id}`,
              borderColor: "#1890ff",
              tension: 0.35,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default NewChart;
