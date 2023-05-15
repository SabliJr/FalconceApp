import "./Portfolio.css";

import { FaEye } from "react-icons/fa";

interface IProps {}

const Portfolio: React.FC<IProps> = (props) => {
  return (
    <>
      <div className='portfolio'>
        <h2>Create your portfolio and see how your assets perform</h2>

        <div className='balance'>
          <div>
            <p>
              Current Balance <FaEye />
            </p>
            <h3>10,000</h3>
            <span>
              + $10,000 <span>24h</span>
            </span>
          </div>
          <button>+ Add assets</button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
