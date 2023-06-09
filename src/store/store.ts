import { combineReducers, configureStore } from '@reduxjs/toolkit';
import goodsReduser from './reducers/GoodsSlice';
import cartReduser from './reducers/CartSlice';

const rootReducer = combineReducers({
  goodsReduser,
  cartReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
