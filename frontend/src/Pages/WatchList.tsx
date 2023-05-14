import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import WatchListTable from "../Components/CoinsData/CoinTable";
import "../Components/CoinsData/CoinsData.css";

interface IProps {}

const WatchList: FC<IProps> = (props) => {
  const theList = useSelector((state: RootState) => state.WatchList.laList);
  // const [storedState, setStoredState] = useStoredState("List", theList);
  // console.log(storedState);
  // console.log(theList);
  // console.log("theList");

  return (
    <div
      style={{
        maxWidth: "1124px",
        margin: "5rem auto",
      }}>
      <h2
        className='tableTitle'
        style={{
          margin: "2rem",
        }}>
        You watch list.
      </h2>
      {theList.length === 0 ? (
        <div>
          <h3>Your watch list is empty</h3>
        </div>
      ) : (
        <main className='tableMain'>
          <table className='coinsTable'>
            <thead className='stickTable'>
              <tr>
                <th></th>
                <th>#</th>
                <th className='coinHeadName'>Name</th>
                <th className='CoinPrice'>Price</th>
                <th className='Coin24'>24h%</th>
                <th className='CoinSupply removeCap'>MarketCap</th>
                <th className='CoinSupply removeRow'>Total Volume</th>
                <th className='CoinCap removeRow'> Circulating supply</th>
              </tr>
            </thead>
            <tbody>
              {theList?.map((coin) => {
                return <WatchListTable key={coin.id} coin={coin} />;
              })}
            </tbody>
          </table>
        </main>
      )}
    </div>
  );
};

export default WatchList;
