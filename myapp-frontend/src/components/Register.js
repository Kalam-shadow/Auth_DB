import { useState } from "react";
import { Navigate } from "react-router-dom";
//import { useAuth } from "../context/AuthContext"; // Correctly importing as a named export

const Register = () => {
    //const { login } = useAuth(); // Correctly using useAuth() hook
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registration successful! Please login.");
                Navigate("/login"); // ✅ Correct usage of Navigate
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
