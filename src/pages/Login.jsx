import React, { useState, useContext } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { setAuthData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
      setAuthData({ token: res.data.token, role: res.data.role });
      alert('Login successful!');
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 w-full border rounded"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 w-full border rounded"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
