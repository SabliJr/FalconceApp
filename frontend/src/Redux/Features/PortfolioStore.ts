import { createSlice } from "@reduxjs/toolkit";

import { iCoins } from "../../Types/iCoinsData";

interface iPortfolio {
    assets: iCoins[];
    totalSpent: number;
    // assetPrice: number;
    quantity: number;
}

const initialState: iPortfolio = {
    assets: [],
    totalSpent: 0,
    // assetPrice: 0,
    quantity: 0,
}

export const portfolioList = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
      AddQuantity: (state, action) => {
        state.quantity += action.payload
      },
      TotalMoney: (state, action) => {
        state.totalSpent += action.payload
      },

      AddCoins: (state, action) => {
        state.assets.push(action.payload)
      }

    }
});
export const { TotalMoney, AddQuantity, AddCoins } = portfolioList.actions

export default portfolioList.reducer