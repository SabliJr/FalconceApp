import React, { useEffect, useState } from "react";
import { useGetCoinsDataQuery } from "../../Redux/Features/CoinsData";
import { MagnifyingGlass } from "react-loader-spinner";
import { RxCross2 } from "react-icons/rx";
import { iCoins } from "../../Types/iCoinsData";
import { RiCloseFill } from "react-icons/ri";
import "./AssetsForm.css";

//Redux
import {
  AddCoins,
  TotalMoney,
  AddQuantity,
} from "../../Redux/Features/PortfolioStore";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
interface iAsset {
  coinName: string | undefined;
  coinImage: string | undefined;
}
interface iProps {
  setAddingAssets: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAsset: React.FC<iProps> = (props) => {
  const [coinPrice, setPrice] = useState<number | string>("0.00");
  const [quantity, setQuantity] = useState<number | string>();
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [isChoose, setChoose] = useState(false);
  const [assetName, setAssetName] = useState<iAsset>({
    coinName: "",
    coinImage: "",
  });

  //Redux
  const { data, isLoading, error } = useGetCoinsDataQuery();
  let dispatch = useDispatch();

  let catchValues = (coin: iCoins) => {
    setPrice(coin.current_price);
    setChoose(true);
    setAssetName({
      coinImage: `${coin.image}`,
      coinName: `${coin.name}`,
    });
  };

  let calculateValues = (coin?: iCoins, quantity?: string) => {
    const theTotal =
      (quantity as string)?.length > 0
        ? (Number(quantity) as number) * (coin?.current_price as number)
        : null;
    setTotalSpent(theTotal as number);
  };
  const coin = data?.find((c) => c.name === assetName.coinName);

  useEffect(() => {
    calculateValues(coin, quantity as string);
  }, [coin, quantity]);

  useEffect(() => {
    setChoose((assetName.coinName as string).length === 0 ? false : isChoose);
  }, [assetName.coinName, isChoose]);

  //Adding to Redux store
  let addToPortfolio = (e: React.MouseEvent, coin: iCoins) => {
    e.preventDefault();
    const action: AnyAction = AddCoins(coin as iCoins);
    dispatch(action);
    dispatch(TotalMoney(totalSpent));
    dispatch(AddQuantity(quantity));
    setChoose(false);
    props.setAddingAssets(false);
  };

  return (
    <article className='theFields'>
      {/* <div className='backDrop'></div> */}
      <span className='headSpan'>
        <h2>Add Transaction</h2>
        <RxCross2
          onClick={() => props.setAddingAssets(false)}
          className='headSpanX'
        />
      </span>
      <label htmlFor='coin-select' className='coinSelection'>
        Select Coin
        <div className='chooseAsset'>
          {isChoose && assetName.coinName?.length !== 0 && (
            <img
              src={assetName.coinImage}
              alt='Coin Img'
              className='chooseAssetImg'
            />
          )}

          <input
            type='text'
            list='coins'
            id='coin-select'
            name='coin-select'
            placeholder='Search'
            value={assetName.coinName}
            onChange={(e) =>
              setAssetName({
                ...assetName,
                coinName: e.target.value,
              })
            }
          />
          {assetName.coinName?.length !== 0 && (
            <div
              className='assetClose'
              onClick={() =>
                setAssetName({
                  ...assetName,
                  coinName: "",
                })
              }>
              <RiCloseFill />
            </div>
          )}
        </div>
      </label>
      {isChoose ? null : (
        <>
          <div className='suggestion'>
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
                {data.slice(0, 70).map((coin) => {
                  return (
                    <li
                      key={coin.id}
                      className='assetsList'
                      onClick={() => {
                        calculateValues(coin);
                        catchValues(coin);
                      }}>
                      <img
                        src={coin.image}
                        alt='searchImg'
                        className='assetImg'
                      />
                      <div className='assetNameDiv'>
                        <p className='assetName'>{coin.name}</p>
                        <p className='assetSymbol'>
                          {coin.symbol.toUpperCase()}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </>
      )}

      {/* The forms */}
      {isChoose && (
        <>
          <div className='quantity'>
            <label htmlFor='Quantity'>
              Quantity
              <input
                type='text'
                placeholder='0'
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
            <h3>${totalSpent?.toLocaleString()}</h3>
          </div>
          <div>
            <button
              className='addBtn'
              onClick={(e) => addToPortfolio(e, coin as iCoins)}>
              Add Transaction
            </button>
          </div>
        </>
      )}
    </article>
  );
};

export default AddAsset;
