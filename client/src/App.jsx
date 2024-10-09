import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CompanyLogin from './components/CompanyLogin';
import CompanySignup from './components/CompanySignup';
import SchoolLogin from './components/SchoolLogin';
import SchoolSignup from './components/SchoolSignup';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company/login" element={<CompanyLogin />} />
                <Route path="/company/signup" element={<CompanySignup />} />
                <Route path="/school/login" element={<SchoolLogin />} />
                <Route path="/school/signup" element={<SchoolSignup />} />
            </Routes>
        </Router>
    );
};

export default App;
