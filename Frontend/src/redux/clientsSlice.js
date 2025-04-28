import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";



const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        clientsList: [{name:"fdg"}],
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.error = null; // עדכון נכון של error
                state.clientsList = [];
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null; // עדכון נכון של error
                state.clientsList = action.payload;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.error = true; // עדכון נכון של error
                state.clientsList = [];
            });
    },
});

export default clientsSlice.reducer;
