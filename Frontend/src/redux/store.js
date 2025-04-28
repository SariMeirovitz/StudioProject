import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from '../redux/clientsSlice';

const store = configureStore({
    reducer: {
        clients: clientsReducer,
    },
});

export default store;
