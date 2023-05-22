import { iChartData } from "../../Types/iCoinsData";
import "chartjs-adapter-moment";

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
  let isData = isActive.capitalBtn === "Price" ? data.prices : data.market_caps;

  const options: ChartOptions<"line"> = {
    responsive: true,
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
          padding: 20,
          font: {
            size: 14,
          },
          callback: function (label, index, labels) {
            return `$${label.toLocaleString()}`;
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
  };

  return (
    <div>
      <Line
        data={{
          labels: isData.map((coin: iValues) => coin[0]),
          datasets: [
            {
              data: isData.map((coin: iValues) => coin[1]),
              label:
                isActive.capitalBtn === "Price"
                  ? `${id} price in the past ${isActive.timeBtn} time period`
                  : `${id} market cap in the past ${isActive.timeBtn} time period`,
              borderColor: "#1890ff",
              fill: true,
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
