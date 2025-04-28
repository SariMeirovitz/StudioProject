import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../api";

export const fetchDataAsyncAction = createAsyncThunk(
    'clients/fetchData',
    async () => {
        const response = await fetchData(); // קריאה לפונקציה fetchData
        return response; // החזרת התגובה
    }
);
