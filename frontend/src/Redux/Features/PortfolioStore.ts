import { createSlice } from "@reduxjs/toolkit";

import { iCoins } from "../../Types/iCoinsData";

interface iPortfolio {
    assets: iCoins[];
    totalSpent: number;
    assetPrice: number;
    quantity: number;
}

const initialState: iPortfolio = {
    assets: [],
    totalSpent: 0,
    assetPrice: 0,
    quantity: 0,
}

export const portfolioList = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
      AssetPrice: (state, action) => {
        state.assetPrice += action.payload.current_price
      },
      AddQuantity: (state, action) => {
        state.quantity += action.payload
      },
      TotalMoney: (state) => {
        state.assets.forEach((x) => {
          state.totalSpent += x.current_price * state.quantity
        })
      }
    }
});

export const { TotalMoney, AssetPrice, AddQuantity } = portfolioList.actions

export default portfolioList.reducer