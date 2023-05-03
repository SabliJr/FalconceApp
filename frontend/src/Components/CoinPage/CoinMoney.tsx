import "./SingleCoin.css";

import { iCoin } from "../../Types/iCoinsData";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

type tMoney = {
  coin: iCoin;
};

const CoinMoney = ({ coin }: tMoney): JSX.Element => {
  console.log(coin);

  return (
    <div className='numDiv'>
      {/* The Volume */}
      <div className='totalVol allCenter'>
        <p className='numDivP'>Total Volume</p>
        <p> ${coin?.market_data?.total_volume?.usd?.toLocaleString()}</p>
      </div>

      {/* Market Cap */}
      <div className='allCenter TotalDiv'>
        <p className='numDivP'>
          Market Cap&nbsp; <span id='chang24'>24h</span>
        </p>
        <div>
          ${coin?.market_data?.market_cap?.usd?.toLocaleString()}&nbsp;
          <span
            className={
              coin?.market_data?.price_change_percentage_24h < 0
                ? "CapDown"
                : "CapUp"
            }>
            {coin?.market_data?.price_change_percentage_24h < 0 ? (
              <RiArrowDropDownFill className='CapChang' />
            ) : (
              <RiArrowDropUpFill className='CapChang' />
            )}
            {coin?.market_data?.market_cap_change_percentage_24h?.toLocaleString()}
            %
          </span>
        </div>
      </div>
      <div className='TotalDiv'>
        <p className='numDivP'>
          <span>Circulating Supply</span>
        </p>
        <span className='allCenter '>
          <p>{coin?.market_data?.circulating_supply?.toLocaleString()}</p>
          <p>{coin?.symbol?.toUpperCase()}</p>
        </span>
      </div>
      <div className='TotalDiv'>
        {coin?.market_data?.total_supply === null ? (
          <span className='allCenter TotalDiv'>
            <p className='numDivP'>Total Supply</p> No Data
          </span>
        ) : (
          <div className='TotalDiv'>
            <p className='numDivP'> Total Supply</p>
            <span className='allCenter '>
              <p> {coin?.market_data?.total_supply?.toLocaleString()}</p>
              <p> {coin?.symbol?.toUpperCase()}</p>
            </span>
          </div>
        )}
      </div>
      {coin?.market_data?.max_supply === null ? (
        <div className='TotalDiv allCenter'>
          <p className='numDivP'>Max Supply</p>
          <p>No Data</p>
        </div>
      ) : (
        <div className='TotalDiv'>
          <p className='numDivP'>Max Supply</p>
          <span className='allCenter '>
            <p>{coin?.market_data?.max_supply?.toLocaleString()}</p>
            <p> {coin?.symbol?.toUpperCase()}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default CoinMoney;
