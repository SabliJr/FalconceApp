import "./SingleCoin.css";

import { iCoin } from "../../Types/iCoinsData";
type tDesc = {
  coin: iCoin;
};

const CoinDesc = ({ coin }: tDesc) => {
  //   console.log(coin);
  return (
    <div className='coinDesc'>
      <h2>What is {coin?.name}</h2>
      {coin?.description?.en === "" ? (
        <p> {coin?.name} has no description</p>
      ) : (
        <>
          <p
            dangerouslySetInnerHTML={{
              __html: coin?.description?.en?.slice(0, 450),
            }}
          />

          <br />
          <p
            dangerouslySetInnerHTML={{
              __html: coin?.description?.en?.slice(450, 895),
            }}
          />
          <br />
          <p
            dangerouslySetInnerHTML={{
              __html: coin?.description?.en?.slice(895, 1500),
            }}
          />
          <br />
          <p
            dangerouslySetInnerHTML={{
              __html: coin?.description?.en?.slice(1500, 3000),
            }}
          />
          <br />
          <p
            dangerouslySetInnerHTML={{
              __html: coin?.description?.en?.slice(3000, 4500),
            }}
          />
        </>
      )}
    </div>
  );
};

export default CoinDesc;
