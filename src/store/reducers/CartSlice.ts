import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartInitialState {
  items: Array<{ id: number; count: number }>;
}

const cartInitialState: ICartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addGood(state, action: PayloadAction<{ id: number; count: number }>) {
      state.items = [...state.items, action.payload];
    },

    removeGood(state, action: PayloadAction<number>) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },

    clearState(state) {
      state.items = [];
    },

    changeCount(state, action: PayloadAction<{ id: number; count: number }>) {
      const elem = state.items.find((el) => el.id === action.payload.id) as {
        id: number;
        count: number;
      };
      elem.count = action.payload.count;
    },
  },
});

export default cartSlice.reducer;
