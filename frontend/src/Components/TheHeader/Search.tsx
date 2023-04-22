import React from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className='MenuDiv'>
      <div className='SearchDiv'>
        <input
          type='text'
          placeholder='Crypto prices, news...'
          autoComplete='off'
          // value={searchCoin}
          onChange={(e) => {
            // setSearchCoin(e.target.value);
          }}
        />
        <BiSearch className='SearchIcon' />
      </div>
    </div>
  );
};

export default Search;
