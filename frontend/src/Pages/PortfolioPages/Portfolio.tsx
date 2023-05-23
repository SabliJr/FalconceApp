import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";

import { FaEye } from "react-icons/fa";
import AddAsset from "../../Components/PortfolioAssets/AddAssets";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";

const Portfolio: React.FC = () => {
  const [AddingAssets, setAddingAssets] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  const theTotalBalance = useSelector(
    (state: RootState) => state.PortfolioStore?.totalSpent
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
        <h2>Create your portfolio and see how your assets perform.</h2>

        <div className='balance'>
          <div className='balanceText'>
            <p>
              Current Balance <FaEye />
            </p>
            <h3>${theTotalBalance.toLocaleString()}</h3>
            <span>
              + $1,000 <span>24h</span>
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
      </main>
    </>
  );
};

export default Portfolio;
