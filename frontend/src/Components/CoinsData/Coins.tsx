import { useState } from "react";
import "./CoinsData.css";

import { Dna } from "react-loader-spinner";
import { useGetCoinsDataQuery } from "../../Redux/Features/CoinsData";
import CoinTable from "./CoinTable";
import Pagination from "./Pagination";

const CoinsData = (): JSX.Element => {
  const { data, isLoading, error } = useGetCoinsDataQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(25);

  //Get current page
  const indexofLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexofLastPage - postPerPage;
  const currentPages = data?.slice(indexOfFirstPage, indexofLastPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {error ? (
        <h3>Oops, something went wrong, please refresh the page again</h3>
      ) : isLoading ? (
        <>
          <Dna
            visible={true}
            height='80'
            width='80'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </>
      ) : data ? (
        <main className='tableMain'>
          <h2 className='tableTitle'>
            Top 250 Active Cryptocurrencies In the Market
          </h2>
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
              {currentPages?.map((coin) => {
                return <CoinTable key={coin.id} coin={coin} />;
              })}
            </tbody>
          </table>
          <Pagination
            postPerPage={postPerPage}
            totalPages={data?.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </main>
      ) : null}
    </>
  );
};

export default CoinsData;
