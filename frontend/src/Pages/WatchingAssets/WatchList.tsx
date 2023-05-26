import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import WatchListTable from "../../Components/CoinsData/CoinTable";
import "../../Components/CoinsData/CoinsData.css";
import "./WhatcingList.css";

const WatchList: React.FC = () => {
  const theList = useSelector((state: RootState) => state.WatchList.laList);
  console.log(theList);

  return (
    <section className='watchSec'>
      <div className='textWatch'>
        <h2 className='tableTitle'>Create your watch list.</h2>
        <p className='tableDesc'>
          Make a list of your favorite coins or that you invested in and track
          their performance, click on the star beside the coin to add it to the
          list.
        </p>
      </div>
      {theList.length > 0 ? (
        <div>
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
      ) : (
        <p className='noWatch'>
          Your watch list is empty add some assets to test the full
          functionality.
        </p>
      )}
    </section>
  );
};

export default WatchList;
