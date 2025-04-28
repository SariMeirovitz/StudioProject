import axios from 'axios';

export const fetchData = async (dispatch) => { // מקבל את dispatch כארגומנט
    try {
        const response = await axios.get('http://localhost:5235/api/Clients');
        console.log(response);
        return response.data; // מחזיר את הנתונים עצמם
    } catch (error) {
        dispatch({
            type: 'YOUR_ERROR_ACTION_TYPE',
            payload: {
                message: error.message,
                status: error.response ? error.response.status : null,
                data: error.response ? error.response.data : null,
            },
        });
        return null; // מחזיר null במקרה של שגיאה
    }
};