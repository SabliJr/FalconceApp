import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import "./HoldingAsset.css";

const HoldingAssets = (): JSX.Element => {
  const HoldingList = useSelector(
    (state: RootState) => state.PortfolioStore.assets
  );
  const HoldingQuantity = useSelector(
    (state: RootState) => state.PortfolioStore.quantity
  );

  return (
    <main>
      <table className='holdingsTable'>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>24H</th>
            <th>Holding</th>
          </tr>
        </thead>
        <tbody className='holdingsTBody'>
          {HoldingList?.map((c) => (
            <tr className='holdingRows'>
              <td className='assetColumn'>
                <img
                  src={c.image}
                  alt='assetImage'
                  className='holdingAssetImg'
                />
                <div>
                  <li> {c.name}</li>
                  <li> {c.symbol.toUpperCase()}</li>
                </div>
              </td>
              <td>${c.current_price.toLocaleString()}</td>
              <td>{c.price_change_percentage_24h.toFixed(4)}%</td>
              <td>{HoldingQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default HoldingAssets;
