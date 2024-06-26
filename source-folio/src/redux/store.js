import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './features/portfolioSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const rootReducer = combineReducers({
    portfolio: portfolioReducer
})
const persistConfig = {
    key: 'root',
    storage,
    version: 1
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export const persister = persistStore(store)