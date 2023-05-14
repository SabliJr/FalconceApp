import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TheNav from "./Components/TheHeader/TheNav";
import TheHomePage from "./Pages/TheHomePage";
import CoinPage from "./Pages/CoinPage";
import WatchList from "./Pages/WatchList";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
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
  );
};

export default App;
