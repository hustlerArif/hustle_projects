import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

export default function App() {
  return (
    <Router>


      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

        {/* <Route path="login" element={<Login />} /> */}
      </Routes>

    </Router>
  );
}

// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [isRegister, setIsRegister] = useState(true);
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isRegister ? '/register' : '/login';

//     try {
//       const response = await axios.post(`http://localhost:5001${endpoint}`, formData);
//       setMessage(response.data);
//       if (!isRegister && response.data.token) {
//         localStorage.setItem('token', response.data.token);
//       }
//     } catch (error) {
//       setMessage(error.response?.data || 'An error occurred.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>{isRegister ? 'Register' : 'Login'}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
//       </form>
//       <button onClick={() => setIsRegister(!isRegister)}>
//         {isRegister ? 'Switch to Login' : 'Switch to Register'}
//       </button><br /><br />
//      output from server: { <p>{message}</p>}
//     </div>
//   );
// };

// export default App;
