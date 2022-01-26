import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import loginReducer from '../features/login/loginSlice';
// import authReducer from '../features/auth/authSlice';

const createStore = () => {
  return configureStore({
    reducer: {
      login: loginReducer,
    },
    devTools: true,
  });
}

export type AppStore = ReturnType<typeof createStore>;

export const wrapper = createWrapper<AppStore>(createStore);

export type RootState =  ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];