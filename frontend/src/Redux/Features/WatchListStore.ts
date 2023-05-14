import { createSlice } from '@reduxjs/toolkit'

import { iCoins } from '../../Types/iCoinsData'

export interface ListState {
  laList: iCoins[]
}

const initialState: ListState = {
    laList: [],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    AddToList: (state, action) => {
      const makeList = state.laList.find((x) => x.id === action.payload.id)
        if (!makeList) {
          state.laList.push(action.payload)
        }
    },
    RemoveFromList: (state, action) => {
      const modifiedList = state.laList.filter((x) => x.id !== action.payload.id)
      state.laList = modifiedList;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { AddToList, RemoveFromList } = listSlice.actions

export default listSlice.reducer