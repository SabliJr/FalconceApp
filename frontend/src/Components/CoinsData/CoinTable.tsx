import { useNavigate } from "react-router-dom";
import "./CoinsData.css";

import millify from "millify";
import { iCoins } from "../../Types/iCoinsData";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";

interface iTable {
  coin: iCoins;
}

const CoinsTable = ({ coin }: iTable): JSX.Element => {
  let num = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let navigate = useNavigate();
  let clickedCoin = (id: string): void => {
    navigate(`coin/${id}`);
  };

  return (
    <tr>
      <td>
        <AiOutlineStar />
      </td>
      <td className='coinRank'>{coin.market_cap_rank}</td>
      <td
        className='CoinImgRow'
        onClick={() => {
          clickedCoin(coin.id);
        }}>
        <img src={coin.image} alt='CoinImg' className='CoinImg' />
        <div className='CoinName'>
          <li>{coin.name}</li>
          <li> {coin.symbol.toUpperCase()}</li>
        </div>
      </td>
      <td className='Prices'> {num.format(coin.current_price)}</td>
      <td>
        <div
          className={
            coin.price_change_percentage_24h < 0 ? "CoinDown" : "CoinUp"
          }>
          {coin.price_change_percentage_24h < 0 ? (
            <RiArrowDropDownFill className='priceIcon' />
          ) : (
            <RiArrowDropUpFill className='priceIcon' />
          )}
          {coin.price_change_percentage_24h}%
        </div>
      </td>
      <td className='CoinSupply removeCap'>${millify(coin.market_cap)}</td>
      <td className='CoinSupply removeRow'>${millify(coin.total_volume)}</td>
      <td className='CoinCap removeRow'>
        <li>{coin.symbol.toUpperCase()}</li>
        <li> {coin.circulating_supply.toLocaleString()}</li>
      </td>
    </tr>
  );
};

export default CoinsTable;
