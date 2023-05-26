import { createSlice } from '@reduxjs/toolkit'
import { iCoins } from '../../Types/iCoinsData'


export interface ListState {
  laList: iCoins[];
}

const storedList = localStorage.getItem("List") 
const initialList = storedList !== null
  ? JSON.parse(storedList as string) : [];

const initialState: ListState = {
    laList: initialList,
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    AddToList: (state, action) => {
      const makeList =  state.laList.find((x) => x.id === action.payload.id)
        if (!makeList) {
          state.laList.push(action.payload)
        }
      localStorage.setItem('List', JSON.stringify(state.laList.map((x) => x)))

    },
    RemoveFromList: (state, action) => {
      const modifiedList = state.laList.filter((x) => x.id !== action.payload.id)
      state.laList = modifiedList;
      localStorage.setItem('List', JSON.stringify(state.laList.map((x) => x)))

    },
  
  },
})

// Action creators are generated for each case reducer function
export const { AddToList, RemoveFromList } = listSlice.actions

export default listSlice.reducer