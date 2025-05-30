import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './createAPI';

export const store = configureStore({
    reducer: {
        [createAPI.reducerPath]: createAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createAPI.middleware),
});

