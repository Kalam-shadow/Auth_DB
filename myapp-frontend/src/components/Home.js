import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="container">
            <h1>Task 6: Database Integration and User Authentication
            </h1>
            <p>Please choose an option below:</p>
            <div className="button-container">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
