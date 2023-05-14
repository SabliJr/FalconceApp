import { useEffect, useState } from "react";
import { useGetChartDataQuery } from "../../Redux/Features/CoinSearch";
import { useParams } from "react-router-dom";
import Chart from "./Chart";
import "./Chart.css";

const CoinChart: React.FC = (props) => {
  let timeBtns: string[] = ["24h", "7D", "1M", "3M"];
  let priceBtns: string[] = ["Price", "MarketCap"];
  const [periodData, setPeriodData] = useState("1");
  const [isActive, setActive] = useState({
    timeBtn: timeBtns[0],
    capitalBtn: priceBtns[0],
  });

  let { id } = useParams<Record<string, string | undefined>>();
  let params = `${id}`;

  //Fetching Data
  const { data, isLoading, error } = useGetChartDataQuery({
    coinId: params,
    period: periodData,
    timeStamp: isActive.timeBtn === "3M" ? "daily" : null,
  });

  // console.log(data);

  useEffect(() => {
    let Fetching = () => {
      if (isActive.timeBtn === "7D") {
        setPeriodData("7");
        console.log(periodData);
      } else if (isActive.timeBtn === "1M") {
        setPeriodData("30");
        console.log(periodData);
      } else if (isActive.timeBtn === "3M") {
        setPeriodData("90");
        console.log(periodData);
      } else {
        setPeriodData("1");
        console.log(periodData);
      }
    };

    Fetching();
  }, [periodData, isActive.timeBtn]);

  return (
    <section className='chart'>
      {error ? (
        <>Oops, something went wrong please refresh again.</>
      ) : isLoading ? (
        <h3>...Loading</h3>
      ) : data ? (
        <>
          <div className='btnDiv'>
            <div>
              {priceBtns.map((btn) => (
                <button
                  key={btn}
                  className={
                    btn === isActive.capitalBtn ? "activeBtn btns" : "btns"
                  }
                  onClick={() =>
                    setActive({
                      ...isActive,
                      capitalBtn: btn,
                    })
                  }>
                  {btn}
                </button>
              ))}
            </div>
            <div>
              {timeBtns.map((btn) => (
                <button
                  key={btn}
                  className={
                    btn === isActive.timeBtn ? "activeBtn btns" : "btns"
                  }
                  onClick={() =>
                    setActive({
                      ...isActive,
                      timeBtn: btn,
                    })
                  }>
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <Chart data={data} isActive={isActive} />
        </>
      ) : null}
    </section>
  );
};

export default CoinChart;
