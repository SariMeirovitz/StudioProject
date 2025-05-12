import { useDispatch, useSelector } from 'react-redux';
import { loginUserAsync } from '../redux/thunk';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.user);

    useEffect(() => {
        // כאשר המשתמש מחובר, נבצע ניווט לאזור האישי
        if (user) {
            navigate('/dashboard'); // הנתיב של האזור האישי
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const idNumber = formData.get('idNumber').trim();
        const name = formData.get('name').trim();

        // אימות בסיסי
        if (idNumber.length !== 9) {
            alert('מספר הזהות חייב להיות באורך 9 תווים.');
            return;
        }
        if (!name) {
            alert('יש להזין שם.');
            return;
        }

        const credentials = { idNumber, name };

        try {
            await dispatch(loginUserAsync(credentials));

            // אם ההתחברות הצליחה, נבצע ניווט לדף אחר (לדוגמה, דף "אזור אישי")
            navigate('/dashboard'); // הנתיב של הדף החדש
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                name="idNumber"
                placeholder="מספר זהות"
                required
                aria-label="מספר זהות"
                autoFocus
            />
            <input
                type="text"
                name="name"
                placeholder="שם"
                required
                aria-label="שם"
            />
            <button type="submit" disabled={loading}>
                {loading ? 'טוען...' : 'כניסה'}
            </button>

            {loading && <div className="spinner">טוען...</div>}
            {error && <p style={{ color: 'red' }}>{error.message || 'אירעה שגיאה, נסה שוב.'}</p>}
        </form>
    );
};

export default Login;