import { createSlice } from "@reduxjs/toolkit";
import { iCoins } from "../../Types/iCoinsData";
interface iPortfolio {

  totalSpent: number;
  HoldingStatus: {
    assets: iCoins[];
    id: string;
    quantity: number;
    totalPayed: number;
  }
}

const initialState: iPortfolio = {
  totalSpent: 0, 
  HoldingStatus: {
    assets: [],
    id: '',
    quantity: 0,
    totalPayed: 0}
  ,
}

export const portfolioList = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
      //  AddQuantity: (state, action) => {
      //     state.HoldingStatus.quantity += action.payload
      // },

      TotalMoney: (state, action) => {
        state.totalSpent += action.payload
      },

      AddCoins: (state, action) => {
        const makeHoldings = state.HoldingStatus.assets.find((c) => c.id === action.payload.id)
        if (!makeHoldings) {
          state.HoldingStatus.assets.push(action.payload);
          state.HoldingStatus.quantity += action.payload.quantity;
          state.HoldingStatus.id = action.payload.id;
          state.HoldingStatus.totalPayed += action.payload.totalPayed;
        } else {
          state.HoldingStatus.quantity += action.payload.quantity;
          state.HoldingStatus.totalPayed += action.payload.totalPayed;
        }
      },

      // AddCoins: (state, action) => {
      //   const existingCoin = state.assets.find((x) => x.id === action.payload.id)
      //   if (!existingCoin) {
      //     state.assets.push(action.payload);
      //     state.HoldingStatus.push({
      //       id: action.payload.id,
      //       quantity: action.payload.quantity,
      //       totalPayed: action.payload.totalPayed
      //     })
      //   } else if (existingCoin) {
      //     state.HoldingStatus.push({
      //       id: action.payload.id,
      //       quantity: action.payload.quantity,
      //       totalPayed: action.payload.totalPayed
      //    })
      //   }

      //    let existingNumber = state.HoldingStatus.find((b) => b.id === action.payload.id)
      //     if (existingNumber) {
      //       existingNumber += action.payload.quantity
      //     }

      // },

      // TotalPayed: (state) => {
      //  const coinPrice: number = state.assets.reduce((total, asset) => {
      //      return total + state.HoldingStatus.quantity * asset.current_price;
      //  }, 0);
      // state.HoldingStatus.totalPayed += coinPrice;
      // }

    //  TotalPayed: (state) => {
    //    state.HoldingStatus.forEach((number) => {
    //      const coin = state.assets.find((asset) => asset.id === number.id);
    //      if (coin) {
    //        let coinPrice = coin.current_price;
    //        number.totalPayed = number.quantity * coinPrice
    //      }
    //    }) 
    //  }


    }
});
export const { TotalMoney, AddCoins, } = portfolioList.actions

export default portfolioList.reducer