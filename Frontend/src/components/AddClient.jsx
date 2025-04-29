import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // ודא שה-import של useSelector קיים
import { addClientAsync } from '../redux/thunk';


const AddClient = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const error = useSelector((state) => state.clients.error);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newClient = {
            id,
            firstName,
            lastName,
            phone,
            age: age ? parseInt(age) : null,
            email,
        };
        
        const resultAction = await dispatch(addClientAsync(newClient)); // שליחת הקליינט החדש ל-redux
        if (addClientAsync.fulfilled.match(resultAction)) {
            setSuccessMessage('נוסף בהצלחה!'); // הצגת הודעת הצלחה
            // ניקוי השדות לאחר הוספה
            setId('');
            setFirstName('');
            setLastName('');
            setPhone('');
            setAge('');
            setEmail('');
            setShowForm(false); // החזרת הטופס למצב סגור
        } else {
            setSuccessMessage(''); // ניקוי הודעת הצלחה אם הייתה שגיאה
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm); // שינוי מצב התצוגה של הטופס
        setSuccessMessage(''); // ניקוי הודעת הצלחה אם הטופס נפתח מחדש
    };

    return (
        <div>
            <h2>Add Client</h2>
            <button onClick={toggleForm}>
                {showForm ? 'Cancel' : 'Add Client'}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                      <div>
                        <label>Id:</label>
                        <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error.message || error}</p>} {/* הצגת שגיאה אם קיימת */}

                    <button type="submit">Add Client</button>
                </form>
            )}
            {successMessage && <div>{successMessage}</div>} {/* הודעת הצלחה */}
        </div>
    );
};

export default AddClient;
