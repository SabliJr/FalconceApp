import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TheNav from "./Components/TheHeader/TheNav";
import TheHomePage from "./Pages/TheHomePage";
import CoinPage from "./Pages/CoinPage";
import WatchList from "./Pages/WatchList";
import Portfolio from "./Pages/PortfolioPages/Portfolio";
import { Dna } from "react-loader-spinner";
import OhNoImg from "../src/Assets/oh-no.png";

import {
  useGetCryptoStatusQuery,
  useGetCoinsDataQuery,
} from "./Redux/Features/CoinsData";

const App = () => {
  const { isLoading: status, error: statusError } = useGetCryptoStatusQuery();
  const { isLoading: coins, error: coinsError } = useGetCoinsDataQuery();

  return (
    <>
      {coinsError && statusError ? (
        <div className='Loader'>
          <img
            src={OhNoImg}
            alt='OhNoImg'
            style={{
              width: "15rem",
            }}
          />
          <h3
            style={{
              fontSize: "2rem",
              color: "rgb(32, 70, 119)",
              textAlign: "center",
              padding: "1.3rem",
            }}>
            There was an error, please refresh again.
          </h3>
        </div>
      ) : status && coins ? (
        <div className='Loader'>
          <Dna
            visible={true}
            height='120'
            width='120'
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper'
          />
        </div>
      ) : (
        <Router>
          <div className='App'>
            <TheNav />
          </div>
          <Routes>
            <Route path='/' element={<TheHomePage />} />
            <Route path='/coin/:id' element={<CoinPage />} />
            <Route path='watch-list/coin/:id' element={<CoinPage />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='watch-list' element={<WatchList />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
