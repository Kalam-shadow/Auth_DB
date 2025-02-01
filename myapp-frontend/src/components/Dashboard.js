// components/Dashboard.js
import React from 'react';
import {  useAuth } from '../context/AuthContext';
import Logout from './Logout';

const Dashboard = () => {
    const { user } = useAuth(); // ✅ Correct usage of useAuth()
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {user?.name}!</h2>
            <Logout />
        </div>
    );
};

export default Dashboard;
