import { Area } from "@ant-design/plots";
import moment from "moment";
import { iChartData } from "../../Types/iCoinsData";
import millify from "millify";

export type iValues = {
  [key: number]: number;
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
  const priceData =
    data?.prices.map((value: iValues) => ({
      date: moment(value[0]).format("MMM DD"),
      price: `$ ${millify(value[1])}`,
    })) || [];

  const marketCapData =
    data?.market_caps.map((x: iValues) => ({
      date: moment(x[0]).format("MMM DD"),
      marketCap: `$ ${millify(x[1])}`,
    })) || [];

  let isData = isActive.capitalBtn === "Price" ? priceData : marketCapData;
  let isPrice = isActive.capitalBtn === "Price" ? "price" : "marketCap";

  const config: iStyle = {
    data: isData,
    xField: "date",
    yField: isPrice,
    // xAxis: {
    //   range: [0, 1],
    //   tickCount: true,
    // },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
    animation: true,
    smooth: true,
    Legend: false,
  };

  return <Area {...config} tooltip={false} />;
};

export default DemoArea;
