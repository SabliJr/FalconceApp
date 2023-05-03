import MarketStatus from "./MarketStatus";
import "./CryptoStatus.css";

//Redux
import { useGetCryptoStatusQuery } from "../../Features/CoinsData";
import { iStatus } from "../../Types/interfaces";

const Status = (): JSX.Element => {
  const { data, error, isLoading } = useGetCryptoStatusQuery();

  return (
    <div className='Status_div'>
      {error ? (
        <h3>Oh no, there was an error</h3>
      ) : isLoading ? (
        <h3>Loading...</h3>
      ) : data ? (
        <>
          {Object.values(data as iStatus[])
            ?.slice(1)
            .map((gs: iStatus, i: number) => (
              <MarketStatus gs={gs} key={i} />
            ))}
        </>
      ) : null}
    </div>
  );
};

export default Status;
