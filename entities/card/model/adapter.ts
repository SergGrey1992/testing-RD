import { createEntityAdapter } from "@reduxjs/toolkit";
import { CardType } from "./types";

export const cardAdapter = createEntityAdapter<CardType>({
  selectId: (card: CardType) => card.id,
})