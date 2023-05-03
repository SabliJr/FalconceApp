import "./SingleCoin.css";

import { iCoin } from "../../Types/iCoinsData";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

type tHeader = {
  coin: iCoin;
};

const CoinHeader = ({ coin }: tHeader) => {
  let num = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className='coinHeader'>
      <span className='rank'>Rank: {coin?.market_cap_rank}</span>
      <div className='coinName'>
        <img src={coin?.image?.large} alt='coinImg' className='coinImg' />
        <div className='PN'>
          <div className='coinNameP'>
            <p>{coin?.name}</p>
            <p>{coin?.symbol?.toUpperCase()}</p>
          </div>
          <div className='headerPrice'>
            <p className='headerP'>
              {num.format(coin?.market_data?.current_price.usd)}
            </p>
            <div>
              <p
                className={
                  coin?.market_data?.price_change_percentage_24h < 0
                    ? "CoinDown"
                    : "CoinUp"
                }>
                {coin?.market_data?.price_change_percentage_24h < 0 ? (
                  <RiArrowDropDownFill className='priceIcon' />
                ) : (
                  <RiArrowDropUpFill className='priceIcon' />
                )}
                {coin?.market_data?.price_change_percentage_24h.toLocaleString()}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
