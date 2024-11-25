import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration successful!');
    } catch (err) {
      alert(err.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 p-2 w-full border rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 w-full border rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 w-full border rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <select
          className="mb-4 p-2 w-full border rounded"
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
