// import { Area, Line } from "@ant-design/plots";
import moment from "moment";
import { iChartData } from "../../Types/iCoinsData";
import millify from "millify";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type iValues = {
  [key: number]: number;
};

export type iValue = {
  price: number;
  timeStamp: number;
};

interface iData {
  data: iChartData;
  isActive: {
    timeBtn: string;
    capitalBtn: string;
  };
}

interface iStyle {
  data: Record<number, number>[];
  xField: string;
  yField: string;
  // xAxis: {
  //   range: [number, number];
  //   tickCount: boolean;
  // };
  areaStyle: () => {
    fill: string;
  };
  smooth?: boolean;
  animation: boolean;
  Legend: boolean;
}

const DemoArea = ({ data, isActive }: iData) => {
  // let date = new Date();
  let timeForm = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format();
  console.log(timeForm);
  let num = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const priceData =
    data?.prices.map((value: iValues) => ({
      date:
        isActive.timeBtn === "3M"
          ? moment(value[0]).format("MMM DD")
          : moment(value[0]).format("hh:ss"),
      price: value[1],
      // `$ ${millify(value[1])}`,
    })) || [];

  const marketCapData =
    data?.market_caps.map((x: iValues) => ({
      date:
        isActive.timeBtn === "3M"
          ? moment(x[0]).format("MMM DD")
          : moment(x[0]).format("h"),
      marketCap: x[1],
      // `$ ${millify(x[1])}`,
    })) || [];

  let isData = isActive.capitalBtn === "Price" ? priceData : marketCapData;
  let isPrice = isActive.capitalBtn === "Price" ? "price" : "marketCap";

  // const config: iStyle = {
  //   data: isData,
  //   xField: "date",
  //   yField: isPrice,
  //   // xAxis: {
  //   //   range: [0, 1],
  //   //   tickCount: true,
  //   // },
  //   areaStyle: () => {
  //     return {
  //       fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
  //     };
  //   },
  //   animation: true,
  //   smooth: true,
  //   Legend: false,
  // };

  // const graphData = data.prices.map((y) => {
  //   let [timeStamp, price]: iValue = y;
  //   return {
  //     Date: timeStamp,
  //     price: price,
  //   };
  // });

  // const graphData: { Date: number; price: number }[] = data.prices.map(
  //   (y: { price: number; time: number }) => {
  //     const { time, price } = y;
  //     return {
  //       Date: time,
  //       price: price,
  //     };
  //   }
  // );

  const graphDate = data.prices.map((y: iValues) => ({
    Date:
      isActive.timeBtn === "3M"
        ? moment(y[0]).format("MMM DD")
        : moment(y[0]).format("hh:ss"),
    price: y[1].toFixed(3),
  }));
  console.log(graphDate);

  return (
    <div
      style={{
        height: "350px",
        margin: "auto",
        maxWidth: "95%",
      }}>
      <ResponsiveContainer width='100%' min-height='100%'>
        <AreaChart data={graphDate}>
          <defs>
            <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#2451B7' stopOpacity={0.4} />
              <stop offset='75%' stopColor='#2451B7' stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray='3 3' opacity={0.3} vertical={false} />

          <XAxis dataKey='Date' axisLine={false} tickLine={false} />

          <YAxis
            tickLine={false}
            axisLine={false}
            tickCount={8}
            dataKey='price'
            tickFormatter={(number) => `$${number.toFixed(2)}`}
            allowDecimals={true}
          />

          <Tooltip />

          <Area
            // type='monotone'
            dataKey='price'
            stroke='#2451B7'
            fill='url(#color)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DemoArea;

// <Line {...config} />;
