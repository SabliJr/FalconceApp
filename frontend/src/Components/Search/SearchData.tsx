import { useState } from "react";
import "../TheHeader/Navbar.css";

import { useGetSearchCoinQuery } from "../../Redux/Features/CoinSearch";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { MagnifyingGlass } from "react-loader-spinner";

const SearchData = () => {
  const [searchCoin, setSearchCoin] = useState("");
  const { data, isLoading, error } = useGetSearchCoinQuery(searchCoin, {
    skip: searchCoin.length < 3 ? true : false,
  });

  let navigate = useNavigate();
  let searchedCoin = (id: string) => {
    navigate(`coin/${id}`);
  };

  window.addEventListener("click", () => {
    setSearchCoin("");
  });

  return (
    <>
      <div className='MenuDiv'>
        <div className='SearchDiv'>
          <input
            type='text'
            placeholder='Crypto prices, news...'
            autoComplete='off'
            value={searchCoin}
            onChange={(e) => {
              setSearchCoin(e.target.value);
            }}
          />
          <BiSearch className='SearchIcon' />
        </div>
      </div>
      <article
        className={searchCoin.length < 3 ? "panel removePanel" : "panel"}>
        <div className='PList'>
          {error ? (
            <h3>Oops, something went wrong please refresh again.</h3>
          ) : isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <MagnifyingGlass
                visible={true}
                height='100'
                width='100'
                ariaLabel='MagnifyingGlass-loading'
                wrapperStyle={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                wrapperClass='MagnifyingGlass-wrapper'
                glassColor='#c0efff'
                color='#e15b64'
              />
            </div>
          ) : data ? (
            <ul>
              {data?.coins.map((coin) => {
                return (
                  <li
                    key={coin.id}
                    className='searchList'
                    onClick={() => {
                      searchedCoin(coin.id);
                      setSearchCoin("");
                    }}>
                    <img
                      src={coin.large}
                      alt='searchImg'
                      className='searchImg'
                    />
                    <div className='searchNameDiv'>
                      <p className='searchSymbol'>
                        {coin.symbol.toUpperCase()}
                      </p>
                      <p className='searchName'>{coin.name}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </article>
    </>
  );
};

export default SearchData;
