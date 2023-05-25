import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iCoins } from "../../Types/iCoinsData";

interface iAsset {
  assets: iCoins;
  id: string;
  quantity: number;
  totalPayed: number;
}

interface iPortfolio {
  totalSpent: number;
  HoldingStatus: iAsset[];
}

const initialState: iPortfolio = {
  totalSpent: 0,
  HoldingStatus: [{
      assets: {} as iCoins,
      id: "",
      quantity: 0,
      totalPayed: 0,
    },
  ],
};

export const portfolioList = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    TotalMoney: (state, action: PayloadAction<number>) => {
      state.totalSpent += action.payload;
    },

    AddCoins: (state, action: PayloadAction<iAsset>) => {
      const makeHoldings = state.HoldingStatus.find(
        (c) => c.assets.id === action.payload.assets.id
      );

      if (!makeHoldings) {
        state.HoldingStatus.push(action.payload);
      } else {
        makeHoldings.quantity += action.payload.quantity;
        makeHoldings.totalPayed += action.payload.totalPayed;
      }
    },
  },
});

export const { TotalMoney, AddCoins } = portfolioList.actions;

export default portfolioList.reducer;
