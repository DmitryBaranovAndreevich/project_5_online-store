import IGood from '../../interfaces/IGood';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortParams {
  price: { min: number; max: number; sorter: (initialState: Array<IGood>) => Array<IGood> };
  manufacturer: { params: Array<string>; sorter: (initialState: Array<IGood>) => Array<IGood> };
  brand: { params: Array<string>; sorter: (initialState: Array<IGood>) => Array<IGood> };
  category: {
    category: string;
    subcategory: string;
    sorter: (initialState: Array<IGood>) => Array<IGood>;
  };
}

interface GoodState {
  goods: Array<IGood>;
  filterState: Array<IGood>;
  sortParams: SortParams;
  setReset: boolean;
  select: {
    value: '1' | '2' | '3' | '4' | null;
    sort: {
      '1': (initialState: Array<IGood>) => Array<IGood>;
      '2': (initialState: Array<IGood>) => Array<IGood>;
      '3': (initialState: Array<IGood>) => Array<IGood>;
      '4': (initialState: Array<IGood>) => Array<IGood>;
    };
  };
}

const initialState: GoodState = {
  goods: [],
  filterState: [],
  sortParams: {
    price: {
      min: 0,
      max: 10000,
      sorter: function (initialState) {
        return initialState.filter(({ price }) => price >= this.min && price <= this.max);
      },
    },
    manufacturer: {
      params: [],
      sorter: function (initialState) {
        if (this.params.length > 0)
          return initialState.filter((el) => this.params.includes(el.manufacturer));
        return initialState;
      },
    },
    brand: {
      params: [],
      sorter: function (initialState) {
        if (this.params.length > 0)
          return initialState.filter((el) => this.params.includes(el.brand));
        return initialState;
      },
    },
    category: {
      category: '',
      subcategory: '',
      sorter: function (initialState) {
        let result = initialState;
        if (this.category)
          result = initialState.filter((el) => el.category.includes(this.category));
        if (this.subcategory)
          result = initialState.filter((el) => el.subCategory.includes(this.subcategory));
        return result;
      },
    },
  },
  setReset: false,
  select: {
    value: null,
    sort: {
      1: (initialState) => {
        return [...initialState].sort((a, b) => a.price - b.price);
      },
      2: (initialState) => {
        return [...initialState].sort((a, b) => b.price - a.price);
      },
      3: (initialState) => {
        return [...initialState].sort((a, b) => b.title.localeCompare(a.title));
      },
      4: (initialState) => {
        return [...initialState].sort((a, b) => a.title.localeCompare(b.title));
      },
    },
  },
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    getState(state) {
      const allCards = JSON.parse(localStorage.getItem('products') as string);
      state.goods = allCards;
      state.filterState = allCards;
    },
    setFilterState(state, action: PayloadAction<Array<IGood>>) {
      state.filterState = action.payload;
    },
    setPriceParams(state, action: PayloadAction<{ param: 'min' | 'max'; value: number }>) {
      state.sortParams.price[action.payload.param] = action.payload.value;
    },
    setParam(
      state,
      action: PayloadAction<{ param: 'brand' | 'manufacturer'; value: Array<string> }>
    ) {
      if (action.payload.param === 'brand') state.sortParams.brand.params = action.payload.value;
      if (action.payload.param === 'manufacturer')
        state.sortParams.manufacturer.params = action.payload.value;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.sortParams.category.category = action.payload;
    },
    setSubCategory(state, action: PayloadAction<string>) {
      state.sortParams.category.subcategory = action.payload;
    },
    sort(state) {
      let result = state.goods;
      const sortConf = state.sortParams;
      const keys = [...Object.keys(sortConf)];
      keys.forEach((key) => {
        result = sortConf[key as keyof SortParams].sorter(result);
      });
      if (state.select.value) {
        result = state.select.sort[state.select.value](result);
      }
      state.filterState = result;
    },
    resetState(state) {
      state.filterState = state.goods;
      state.sortParams = initialState.sortParams;
      state.setReset = !state.setReset;
    },
    setSelect(state, action: PayloadAction<"1"|'2'|'3'|'4'|null>) {
      state.select.value = action.payload
    }
  },
});

export default goodsSlice.reducer;
