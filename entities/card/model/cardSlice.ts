import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardAdapter } from "./adapter";
import { CardType } from "./types";

const cardSlice = createSlice({
  name: 'card', 
  initialState: cardAdapter.getInitialState(),
  reducers: {
    unshiftOne: (state, action: PayloadAction<CardType>) => {
      const allEntities = Object.values(state.entities).filter(entity => entity) as CardType[];
      allEntities.unshift(action.payload);
      cardAdapter.setAll(state, allEntities);
    },
    removeLast: (state) => {
      const allEntities = Object.values(state.entities).filter(entity => entity) as CardType[];
      allEntities.pop();
      cardAdapter.setAll(state, allEntities);
    }
  }
})

export const cardReducer = cardSlice.reducer

export const { unshiftOne, removeLast } = cardSlice.actions