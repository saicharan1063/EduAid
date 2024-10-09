// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to the School Support Portal</h1>
            <div className="button-container">
                <button className="btn donate-btn" onClick={() => navigate('/company/login')}>
                    Donate
                </button>
                <button className="btn request-btn" onClick={() => navigate('/school/login')}>
                    Request
                </button>
            </div>
        </div>
    );
};

export default Home;
