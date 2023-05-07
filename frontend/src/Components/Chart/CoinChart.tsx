import { useState } from "react";
import { useGetChartDataQuery } from "../../Features/CoinSearch";
import Chart from "./Chart";
import "./Chart.css";

const CoinChart: React.FC = (props) => {
  let timeBtns: string[] = ["24h", "7D", "1M", "3M"];
  let priceBtns: string[] = ["Price", "MarketCap"];
  const [isActive, setActive] = useState({
    timeBtn: 0,
    capitalBtn: 0,
  });

  //Fetching Data
  const [periodData, setPeriodData] = useState("1");
  const { data, isLoading, error } = useGetChartDataQuery({
    coinId: "bitcoin",
    period: periodData,
    timeStamp: "daily",
  });

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
              {priceBtns.map((btn, i) => (
                <button
                  key={btn}
                  className={
                    i === isActive.capitalBtn ? "activeBtn btns" : "btns"
                  }
                  onClick={() =>
                    setActive({
                      ...isActive,
                      capitalBtn: i,
                    })
                  }>
                  {btn}
                </button>
              ))}
            </div>
            <div>
              {timeBtns.map((btn, i) => (
                <button
                  key={btn}
                  className={i === isActive.timeBtn ? "activeBtn btns" : "btns"}
                  onClick={() =>
                    setActive({
                      ...isActive,
                      timeBtn: i,
                    })
                  }>
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <Chart data={data} />
        </>
      ) : null}
    </section>
  );
};

export default CoinChart;
