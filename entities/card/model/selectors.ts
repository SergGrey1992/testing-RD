import { RootState } from "../../../global/store";
import { cardAdapter } from "./adapter";

const cardSelector = cardAdapter.getSelectors<RootState>((state) => state.card)

export const selectAllCard = (state: RootState) => cardSelector.selectAll(state)