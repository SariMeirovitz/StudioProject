import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'; // ודא שה-import של axios קיים
import { addClient, fetchData } from "../api";

export const fetchDataAsyncAction = createAsyncThunk(
    'clients/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchData();
            return data; // החזרת הנתונים
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.response ? error.response.status : null,
                data: error.response ? error.response.data : null,
            });
        }
    }
);

// const validateClient = (client) => {
//     // בדוק שהשדות הנדרשים קיימים
//     if (!client.name || !client.email) {
//         throw new Error('Name and email are required');
//     }
//     // הוסף בדיקות נוספות לפי הצורך
// };

export const handleError = (state, action) => {
    state.loading = false;
    state.error = action.payload || 'An error occurred'; // החזרת הודעת שגיאה
};

export const addClientAsync = createAsyncThunk(
    'clients/addClient',
    async (newClient, { rejectWithValue }) => {
        try {
            // validateClient(newClient); // אימות נתונים
           const response = await addClient(newClient);
            // axios.post('/api/Clients', newClient); // ודא שהכתובת נכונה
            return response.data; // החזרת הקליינט שנוסף
        } catch (error) {
            return rejectWithValue({
                message: error.message,
                status: error.response ? error.response.status : null,
                data: error.response ? error.response.data : null,
            }); // החזרת שגיאה במקרה של בעיה
        }
    }
);
