import React from "react";

//Components
import Status from "../Components/CryptoStatus/Status";
import CoinsData from "../Components/CoinsData/Coins";
import Footer from "../Components/TheFooter/Footer";

const TheHomePage: React.FC = (props) => {
  return (
    <main className='mainApp'>
      <Status />
      {/* <article className='mainArt'> */}
      <CoinsData />
      {/* <CryptoNews /> */}
      {/* </article> */}
      <Footer />
    </main>
  );
};

export default TheHomePage;
