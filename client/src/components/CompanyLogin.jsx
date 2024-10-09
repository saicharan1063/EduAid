import React, { useState } from 'react';

const CompanyLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Add error state to handle login errors

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/company/login/', {
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
                setError('');  // Clear error on successful login
            } else {
                // Handle error and display the error message
                console.error("Login error:", data.message);
                setError(data.message || 'Login failed'); // Set error message
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <h2>Company Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <a href="/company/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default CompanyLogin;
