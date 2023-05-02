import React from "react";

//Components
import Status from "../Components/CryptoStatus/Status";
import CoinsData from "../Components/CoinsData/Coins";

const TheHomePage: React.FC = (props) => {
  return (
    <main className='mainApp'>
      <Status />
      {/* <article className='mainArt'> */}
      <CoinsData />
      {/* <CryptoNews /> */}
      {/* </article> */}
      {/* <TheFooter /> */}
    </main>
  );
};

export default TheHomePage;
