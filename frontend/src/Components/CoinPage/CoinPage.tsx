import { useGetCoinDataQuery } from "../../Redux/Features/CoinsData";
import { useParams } from "react-router-dom";
import { LineWave } from "react-loader-spinner";
import "./SingleCoin.css";

//Components
import CoinHeader from "./CoinHeader";
import CoinMoney from "./CoinMoney";
import CoinDesc from "./CoinDesc";
import CoinChart from "../Chart/CoinChart";
import Footer from "../TheFooter/Footer";

const SingleCoin = (): JSX.Element => {
  let { id } = useParams<Record<string, string | undefined>>();
  let params = `${id}`;

  const { data, isLoading, error } = useGetCoinDataQuery(params);

  return (
    <>
      {error ? (
        <h3>Oops, Something went wrong please refresh again</h3>
      ) : isLoading ? (
        <>
          <LineWave
            height='100'
            width='100'
            color='#4fa94d'
            ariaLabel='line-wave'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            firstLineColor=''
            middleLineColor=''
            lastLineColor=''
          />
        </>
      ) : data ? (
        <>
          <CoinHeader coin={data} />
          <CoinMoney coin={data} />
          <CoinChart />
          <CoinDesc coin={data} />
          <Footer />
        </>
      ) : null}
    </>
  );
};

export default SingleCoin;
