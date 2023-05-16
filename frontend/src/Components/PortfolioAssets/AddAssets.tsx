import { useState } from "react";
import "./AssetsForm.css";

import { RxCross2 } from "react-icons/rx";

interface iProps {
  setAddingAssets: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAssets: React.FC<iProps> = (props) => {
  const [coinPrice, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>("0.00");
  const [assetName, setAssetName] = useState<string>("");
  const [totalSpent, setTotalSpent] = useState<number>(0);

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
          <label htmlFor='select' className='coinSelection'>
            Select Coin
            <input
              type='text'
              placeholder='Search'
              name='select'
              id='select'
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
            />
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
