import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import "./HoldingAsset.css";
import HoldingTable from "./HoldingTable";

const HoldingAssets = (): JSX.Element => {
  const assetsList = useSelector((state: RootState) =>
    state.PortfolioStore.HoldingStatus.map((f) => f.assets)
  );

  return (
    <main className='holdingsMain'>
      <table className='holdingsTable'>
        <thead>
          <tr>
            <th id='assetNameH'>Asset</th>
            <th>Price</th>
            <th>24H</th>
            <th>Holding</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {assetsList?.slice(1).map((coin) => (
            <HoldingTable coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default HoldingAssets;
