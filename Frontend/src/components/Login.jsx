// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginAsync } from '../redux/thunk'; // הנח שיש לך thunk עבור כניסת משתמש

// const Login = () => {
//     const dispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const userCredentials = { email, password };

//         const resultAction = await dispatch(loginAsync(userCredentials));
//         if (loginAsync.fulfilled.match(resultAction)) {
//             // הצלחה בכניסה
//             setEmail('');
//             setPassword('');
//             setError('');
//         } else {
//             // טיפול בשגיאה
//             setError('שגיאה בכניסה, אנא נסה שוב.');
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
//                 <div className="mb-3">
//                     <label className="form-label">Email:</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password:</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 {error && <p className="text-danger">{error}</p>}
//                 <button type="submit" className="btn btn-primary">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
