// src/components/CompanySignup.js
import React, { useState } from 'react';

const CompanySignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        contact_name: '',
        phone: '',
        type: 'Company', // Default type
        picture: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, picture: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formPayload = new FormData();
        for (const key in formData) {
            formPayload.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:8000/api/company/signup/', {
                method: 'POST',
                body: formPayload,
            });
            const data = await response.json();
            if (response.ok) {
                // Handle successful signup
                console.log("Signup successful:", data);
            } else {
                // Handle error
                console.error("Signup error:", data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div className="signup-container">
            <h2>Company Signup</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                <label>State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                <label>Zip</label>
                <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} required />
                <label>Contact Name</label>
                <input type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} required />
                <label>Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                <label>Picture</label>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default CompanySignup;
