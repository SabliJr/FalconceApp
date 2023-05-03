import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TheNav from "./Components/TheHeader/TheNav";
import TheHomePage from "./Pages/TheHomePage";
import CoinPage from "./Pages/CoinPage";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <TheNav />
      </div>
      {/* <SearchData /> */}
      <Routes>
        <Route path='/' element={<TheHomePage />} />
        <Route path='/coin/:id' element={<CoinPage />} />
      </Routes>
    </Router>
  );
};

export default App;
