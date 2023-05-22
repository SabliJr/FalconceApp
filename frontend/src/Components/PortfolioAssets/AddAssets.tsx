import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AssetsForm.css";
import { MagnifyingGlass } from "react-loader-spinner";

import { RxCross2 } from "react-icons/rx";
import { useGetCoinsDataQuery } from "../../Redux/Features/CoinsData";
import { useGetSearchCoinQuery } from "../../Redux/Features/CoinSearch";
import { iCoins } from "../../Types/iCoinsData";
import { iSearchCoin } from "../../Types/interfaces";
import {
  AddQuantity,
  TotalMoney,
  AssetPrice,
} from "../../Redux/Features/PortfolioStore";

interface iProps {
  setAddingAssets: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iAsset {
  coinName: string | undefined;
  coinImage: string | undefined;
}

const AddAssets: React.FC<iProps> = (props) => {
  const [assetName, setAssetName] = useState<iAsset>({
    coinName: "",
    coinImage: "",
  });
  const [initialAssets, setInitial] = useState<iCoins[] | undefined>();

  const { data, isLoading, error } = useGetCoinsDataQuery();
  // const { data, isLoading, error } = useGetSearchCoinQuery(
  //   assetName.coinName as string,
  //   {
  //     skip: (assetName.coinName as string).length < 3 ? true : false,
  //   }
  // );

  // useEffect(() => {
  //   setInitial(data);
  // }, [data]);

  console.log(initialAssets);

  let dispatch = useDispatch();
  let catchValues = (c: iCoins, data: iSearchCoin) => {};

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
              value={[
                assetName.coinName as string,
                assetName.coinImage as string,
              ]}
              onChange={(e) =>
                setAssetName({
                  ...assetName,
                  coinName: e.target.value,
                })
              }
            />
          </label>

          <div
            className={
              (assetName.coinName as string).length > 3 ? "nemw" : "nhj"
            }>
            {error ? (
              <h3>Oops, something went wrong please refresh again.</h3>
            ) : isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <MagnifyingGlass
                  visible={true}
                  height='70'
                  width='70'
                  ariaLabel='MagnifyingGlass-loading'
                  wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  wrapperClass='MagnifyingGlass-wrapper'
                  glassColor='#c0efff'
                  color='#e15b64'
                />
              </div>
            ) : data ? (
              <ul>
                {data.slice(0, 15).map((coin) => {
                  return (
                    <li
                      key={coin.id}
                      className='searchList'
                      // onClick={() => {
                      //   setAssetName({
                      //     coinImage: `${coin.large}`,
                      //     coinName: `${coin.name}`,
                      //   });
                      //   setPrice(coin.current_price);
                      // }}
                    >
                      <img
                        src={coin.image}
                        alt='searchImg'
                        className='searchImg'
                      />
                      <div className='searchNameDiv'>
                        <p className='searchSymbol'>
                          {coin.symbol.toUpperCase()}
                        </p>
                        <p className='searchName'>{coin.name}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddAssets;

  // {
  //   (initialAssets as iCoins[])?.map((c: iCoins) => (
  //     <option key={c.id} onClick={() => catchValues(c)}>
  //       <img src={c.image} alt={`${c.name} img`} />
  //       {c.name}
  //       {c.symbol.toUpperCase()}
  //     </option>
  //   ));
  // }


