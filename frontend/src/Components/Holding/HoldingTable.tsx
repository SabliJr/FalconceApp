import "./HoldingAsset.css";
import "../CoinsData/CoinsData.css";
import { iCoins } from "../../Types/iCoinsData";

import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

interface iTable {
  coin: iCoins;
}

const HoldingTable = ({ coin }: iTable): JSX.Element => {
  const holdingAsset = useSelector((state: RootState) =>
    state.PortfolioStore.HoldingStatus.find((asset) => asset.id === coin.id)
  );

  const holdingQuantity = holdingAsset ? holdingAsset.quantity : null;
  const holdingTotalPayed = holdingAsset ? holdingAsset.totalPayed : null;
  console.log(holdingQuantity);

  return (
    <>
      <tr className='holdingRows'>
        <td className='assetColumn'>
          <img src={coin.image} alt='assetImage' className='holdingAssetImg' />
          <div>
            <li> {coin.name}</li>
            <li> {coin.symbol?.toUpperCase()}</li>
          </div>
        </td>
        <td>${coin.current_price?.toLocaleString()}</td>
        <td>
          <div
            className={
              coin.price_change_percentage_24h < 0 ? "AssetDown" : "AssetUp"
            }>
            {coin.price_change_percentage_24h < 0 ? (
              <RiArrowDropDownFill className='priceIcon' />
            ) : (
              <RiArrowDropUpFill className='priceIcon' />
            )}
            {coin.price_change_percentage_24h?.toFixed(4)}%
          </div>
        </td>
        <td>{holdingQuantity}</td>
        <td>${holdingTotalPayed?.toLocaleString()}</td>
      </tr>
    </>
  );
};

export default HoldingTable;
