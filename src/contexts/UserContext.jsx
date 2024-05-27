import { createContext, useState, useEffect } from "react";
import { api } from "./../utils/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // !!! TEMP
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({
        University: "",
        Username: "",
        Email: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const login = async (userData) => {
        // TODO need to add JWT and cookies

        console.log(userData);
        try {
            const response = await api.post("/auth/login", { ...userData });

            if (response.status === 200) {
                const { Username, UserID, Email } = response.data;
                setUser({
                    Username,
                    UserID,
                    Email,
                });
                setIsLoggedIn(true);
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            alert(
                "Network error logging in, please refresh page and try again."
            );
        }
    };

    const logout = () => {
        // TODO this will call backend to clear cookies
        setUser(null);
        setIsLoggedIn(false);
    };

    const signUpUser = (userData) => {
        console.log("signup");
    };

    const value = { user, login, logout, isLoggedIn, signUpUser };

    useEffect(() => {
        const verifyUserSession = async () => {
            setIsLoggedIn(true);
            // !!! TEMP
            // try {
            //     const response = await api.get("/auth/verifyToken", {
            //         withCredentials: true,
            //     });
            //     if (response.status === 200) {
            //         console.log("Session is active:", response.data.user);
            //         setUser(response.data.user);
            //         setIsLoggedIn(true);
            //     }
            // } catch (error) {
            //     console.log("Session is not active:", error);
            //     setIsLoggedIn(false);
            //     setUser(null);
            // }
        };

        verifyUserSession();
    }, []);

    return (
        <UserContext.Provider
            value={value}
            login={login}
            isLoggedIn={isLoggedIn}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
