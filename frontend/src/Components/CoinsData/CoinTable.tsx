import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToList, RemoveFromList } from "../../Redux/Features/WatchListStore";
import "./CoinsData.css";

import millify from "millify";
import { iCoins } from "../../Types/iCoinsData";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

interface iTable {
  coin: iCoins;
}

const CoinsTable = ({ coin }: iTable): JSX.Element => {
  const [isOnList, setOnList] = useState(false);
  const dispatch = useDispatch();

  let num = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let navigate = useNavigate();
  let clickedCoin = (id: string): void => {
    navigate(`coin/${id}`);
  };

  //Add the items the Redux store
  let pickCoin = (isOnList: boolean): void => {
    isOnList ? dispatch(AddToList(coin)) : dispatch(RemoveFromList(coin));
  };

  //Loading up the items from the localStorage
  useEffect(() => {
    const savedList = localStorage.getItem("List");
    if (savedList) {
      const savedListObj = JSON.parse(savedList);
      const itemIndex = savedListObj.findIndex(
        (item: iCoins) => item.id === coin.id
      );
      if (itemIndex !== -1) {
        setOnList(true);
      }
    }
  }, [coin.id]);

  return (
    <tr>
      <td>
        <svg
          width='18px'
          height='18px'
          className='listStar'
          viewBox='0 0 48 48'
          fill='none'
          onClick={() => {
            setOnList(!isOnList);
            pickCoin(!isOnList);
          }}
          xmlns='http://www.w3.org/2000/svg'>
          <rect width={48} height={48} fill='white' fillOpacity={0.01} />
          <path
            d='M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z'
            fill={isOnList ? "#2F88FF" : "none"}
            stroke='#000000'
            strokeWidth={4}
            strokeLinejoin='round'
          />
        </svg>
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
