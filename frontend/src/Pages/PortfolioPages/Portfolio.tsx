import { useEffect, useRef, useState } from "react";
import "./Portfolio.css";

import { FaEye } from "react-icons/fa";
import AddAssets from "../../Components/PortfolioAssets/AddAssets";

const Portfolio: React.FC = () => {
  const [AddingAssets, setAddingAssets] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

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
            <h3>$10,000.035</h3>
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
            <AddAssets setAddingAssets={setAddingAssets} />
          </div>
        )}
      </main>
    </>
  );
};

export default Portfolio;
