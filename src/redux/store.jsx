import { createAPI } from './createAPI';
import { configureStore } from '@reduxjs/toolkit';
import clientManagementReducer from './clientManagementSlice';
import authReducer from './authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'client']
};

const rootReducer = combineReducers({
    [createAPI.reducerPath]: createAPI.reducer,
    auth: authReducer,
    client: clientManagementReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(createAPI.middleware),
});

export const persistor = persistStore(store);
