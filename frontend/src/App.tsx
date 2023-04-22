import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TheHomePage from "./Pages/TheHomePage";

const App = () => {
  return (
    <main className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<TheHomePage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
