import { createSlice } from "@reduxjs/toolkit";
import { iCoins } from "../../Types/iCoinsData";
interface iPortfolio {

  totalSpent: number;
  numbers: {
    assets: iCoins[];
    id: string,
    quantity: number;
    totalPayed: number 
  }[]
}

const initialState: iPortfolio = {

  totalSpent: 0, 
  numbers: [{
    assets: [],
    id: '',
    quantity: 0,
    totalPayed: 0}]
  ,
}

export const portfolioList = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
       AddQuantity: (state, action) => {
          state.numbers.quantity += action.payload
      },

      TotalMoney: (state, action) => {
        state.totalSpent += action.payload
      },

      AddCoins: (state, action) => {
        const makeHoldings = state.assets.find((x) => x.id === action.payload.id)
        if (!makeHoldings) {
          state.assets.push(action.payload)
        }
      },

      AddCoins: (state, action) => {
        const existingCoin = state.assets.find((x) => x.id === action.payload.id)
        if (!existingCoin) {
          state.assets.push(action.payload);
          state.numbers.push({
            id: action.payload.id,
            quantity: action.payload.quantity,
            totalPayed: action.payload.totalPayed
          })
        } else if (existingCoin) {
          state.numbers.push({
            id: action.payload.id,
            quantity: action.payload.quantity,
            totalPayed: action.payload.totalPayed
         })
        }

         let existingNumber = state.numbers.find((b) => b.id === action.payload.id)
          if (existingNumber) {
            existingNumber += action.payload.quantity
          }

      },

      TotalPayed: (state) => {
       const coinPrice: number = state.assets.reduce((total, asset) => {
           return total + state.numbers.quantity * asset.current_price;
       }, 0);
      state.numbers.totalPayed += coinPrice;
      }

     TotalPayed: (state) => {
       state.numbers.forEach((number) => {
         const coin = state.assets.find((asset) => asset.id === number.id);
         if (coin) {
           let coinPrice = coin.current_price;
           number.totalPayed = number.quantity * coinPrice
         }
       }) 
     }


    }
});
export const { TotalMoney, AddCoins, TotalPayed } = portfolioList.actions

export default portfolioList.reducer