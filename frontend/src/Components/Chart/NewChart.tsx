import { iChartData } from "../../Types/iCoinsData";
// import { Line, CategoryScale } from "react-chartjs-2";
import moment from "moment";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import millify from "millify";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
  const priceData =
    data?.prices.map((value: iValues) => ({
      date:
        isActive.timeBtn === "3M"
          ? moment(value[0]).format("MMM DD")
          : moment(value[0]).format("hh:ss"),
      price: value[1],
      // `$ ${millify(value[1])}`,
    })) || [];

  let num = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const marketCapData =
    data?.market_caps.map((x: iValues) => ({
      date:
        isActive.timeBtn === "3M"
          ? moment(x[0]).format("MMM DD")
          : moment(x[0]).format("h"),
      marketCap: x[1],
      // `$ ${millify(x[1])}`,
    })) || [];
  let isData = isActive.capitalBtn === "Price" ? data.prices : data.market_caps;
  let isNewData = isActive.capitalBtn === "Price" ? priceData : marketCapData;
  let isPrice = isActive.capitalBtn === "Price" ? "price" : "marketCap";

  return (
    <div>
      <Line
        data={{
          labels: isData.map((coin: iValues) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return isActive.timeBtn === "1D" ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: isData.map((coin: iValues) => coin[1]),
              label:
                isActive.capitalBtn === "Price"
                  ? `${id} price in the past ${isActive.timeBtn} time period`
                  : `${id} market cap in the past ${isActive.timeBtn} time period`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          scales: {
            x: {
              display: false,
              //   girds: {
              //     drawTicks: false,
              //   },
            },
            y: {
              //   girds: {
              //     drawTicks: false,
              //   },
            },
          },
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default NewChart;
