import { configureStore } from '@reduxjs/toolkit';
import { employeeApi } from './employeeApi';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: {
    ...rootReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
