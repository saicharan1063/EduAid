// src/components/SchoolLogin.js
import React, { useState } from 'react';

const SchoolLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/school/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // Handle successful login
                console.log("Login successful:", data);
            } else {
                // Handle error
                console.error("Login error:", data.message);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div className="login-container">
            <h2>School Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <a href="/school/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default SchoolLogin;
