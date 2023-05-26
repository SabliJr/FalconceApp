import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";

import { FaEye } from "react-icons/fa";
import AddAsset from "../../Components/PortfolioAssets/AddAssets";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import HoldingAsset from "../../Components/Holding/HoldingAsset";

const Portfolio: React.FC = () => {
  const [AddingAssets, setAddingAssets] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const theTotalBalance = useSelector(
    (state: RootState) => state.PortfolioStore?.totalSpent
  );
  const HoldingList = useSelector((state: RootState) =>
    state.PortfolioStore.HoldingStatus.map((f) => f.assets)
  );

  useEffect(() => {
    let closeModel = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (
        !btnRef?.current?.contains(e.target as HTMLButtonElement) &&
        !componentRef?.current?.contains(e.target as Node)
      ) {
        setAddingAssets(false);
      }
    };

    document.addEventListener("mousedown", closeModel as () => void);
    return () =>
      document.removeEventListener("mousedown", closeModel as () => void);
  }, [AddingAssets]);

  return (
    <>
      <main className='portfolio'>
        <h2>Make a portfolio</h2>
        <p>
          Create your portfolio and track the changes on your balance, plus,
          your gains and losses in 24h, you can add your assets from the button
          below `Add Assets`. Just select your coins and put in the quantity,
          voilà, you have your portfolio.
        </p>

        <div className='balance'>
          <div className='balanceText'>
            <p>
              Total Balance <FaEye />
            </p>
            <h3>${theTotalBalance.toLocaleString()}</h3>
            <span>
              + $0 <span>24h</span>
            </span>
          </div>
          <div>
            <button
              ref={btnRef}
              className='addAssetsBtn'
              onClick={() => setAddingAssets(!AddingAssets)}>
              + Add assets
            </button>
          </div>
        </div>

        {AddingAssets && (
          <div ref={componentRef}>
            <AddAsset setAddingAssets={setAddingAssets} />
          </div>
        )}

        {HoldingList.length > 1 ? (
          <HoldingAsset />
        ) : (
          <h3 className='noHoldings'>
            Your portfolio is empty add some assets to test the full
            functionality.
          </h3>
        )}
      </main>
    </>
  );
};

export default Portfolio;
