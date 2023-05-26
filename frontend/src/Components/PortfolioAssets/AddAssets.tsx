import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AssetsForm.css";

import { RxCross2 } from "react-icons/rx";
import { useGetCoinsDataQuery } from "../../Redux/Features/CoinsData";
import { iCoins } from "../../Types/iCoinsData";
import {
  AddQuantity,
  TotalMoney,
  AssetPrice,
} from "../../Redux/Features/PortfolioStore";

interface iProps {
  setAddingAssets: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAssets: React.FC<iProps> = (props) => {
  const [coinPrice, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>("0.00");
  const [assetName, setAssetName] = useState<string>();
  const [initialAssets, setInitial] = useState<iCoins[] | undefined>();
  const [totalSpent, setTotalSpent] = useState<number>(0);

  const { data, isLoading, error } = useGetCoinsDataQuery();
  useEffect(() => {
    setInitial(data?.slice(0, 20) as iCoins[] | undefined);
  }, [assetName, data]);

  let dispatch = useDispatch();
  let catchValues = (c: iCoins) => {
    setPrice(c.current_price);
  };

  return (
    <section className='formSection'>
      <div className='backDrop'></div>
      <form>
        <fieldset className='theFields'>
          <span className='headSpan'>
            <h2>Add Transaction</h2>
            <RxCross2
              onClick={() => props.setAddingAssets(false)}
              className='headSpanX'
            />
          </span>

          <label htmlFor='coin-select' className='coinSelection'>
            Select Coin
            <input
              type='text'
              list='coins'
              id='coin-select'
              name='coin-select'
              placeholder='Search'
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
            />
            <datalist id='coins'>
              {(initialAssets as iCoins[])?.map((c: iCoins) => (
                <option key={c.id} onClick={() => catchValues(c)}>
                  {/* <img src={c.image} alt={`${c.name} img`} /> */}
                  {c.name}
                  {c.symbol.toUpperCase()}
                </option>
              ))}
            </datalist>
          </label>

          <div className='quantity'>
            <label htmlFor='Quantity'>
              Quantity
              <input
                type='text'
                id='Quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
            <label htmlFor='PricePerCoin' className='PricePerCoin'>
              Price Per Coin
              <input
                type='number'
                value={coinPrice}
                id='PricePerCoin'
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className='totalMoney'>
            <p>Total Spent</p>
            <h3>${totalSpent}</h3>
          </div>
          <div>
            <button className='addBtn'>Add Transaction</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddAssets;
