import { createContext, useState, useEffect, useContext} from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:5000/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(res => setUser(res.data))
                .catch(() => {
                    console.error("Invalid token, logging out...");
                    localStorage.removeItem("token");
                    setUser(null);
                });
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);
        } catch (error) {
            console.error("Login failed:", error.response?.data?.message || error.message);
            throw error; // Rethrow to be caught in Login.js
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// ✅ Fix: Do not export `useContext`
export const useAuth = () =>  useContext(AuthContext);