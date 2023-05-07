import { Area, Line } from "@ant-design/plots";
import moment from "moment";
import { iChartData } from "../../Types/iCoinsData";
import millify from "millify";

export type iValues = {
  [key: number]: number;
};

interface iData {
  data: iChartData;
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

const DemoArea = ({ data }: iData) => {
  const coinChartData =
    data?.prices.map((value: iValues) => ({
      date: moment(value[0]).format("MMM DD"),
      price: `$ ${millify(value[1])}`,
    })) || [];

  console.log(coinChartData);

  const config: iStyle = {
    data: coinChartData,
    xField: "date",
    yField: "price",
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
