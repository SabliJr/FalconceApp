import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import "./HoldingAsset.css";
import HoldingTable from "./HoldingTable";

const HoldingAssets = (): JSX.Element => {
  const HoldingList = useSelector(
    (state: RootState) => state.PortfolioStore.assets
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
          </tr>
        </thead>
        <tbody>
          {HoldingList?.map((coin) => (
            <HoldingTable coin={coin} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default HoldingAssets;
