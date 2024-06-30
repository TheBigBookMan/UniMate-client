import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { api } from "./../utils/api";

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextInterface | undefined>(
    undefined
);

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    // !!! TEMP
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState<User | null>(null);

    // !!! TEMP FOR DEV
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // ? Send credentials to backend for checking login and add cookies if correct
    const login = async (userData: LoginDetails): Promise<string | void> => {
        try {
            const { username, password, uni } = userData;

            const response = await api.post(
                "/api/auth/login",
                { username, password },
                { headers: { UniversityName: uni } }
            );

            if (response.status === 200) {
                console.log(response);
                const data = response.data;
                const responseMessage = data["responseMessage"].toLowerCase();

                if (responseMessage === "reset password") {
                    const { studentId } = data;

                    return studentId;
                    // TODO add in reset password functionality here API call
                } else if (responseMessage === "login success") {
                    const { studentId, uniEmail, uniStudentId } = data;
                    setUser({
                        University: uni,
                        Username: username,
                        StudentId: studentId,
                        Email: uniEmail,
                        UniStudentId: uniStudentId,
                    });
                    setIsLoggedIn(true);
                    // TODO nav to home
                }
            } else {
                return "fail";
            }
        } catch (err) {
            console.log(err);
            alert(
                "Network error logging in, please refresh page and try again."
            );
            return "fail";
        }
    };

    // ? Call to backend to remove cookies
    const logout = async (): Promise<void> => {
        // TODO this will call backend to clear cookies
        setUser(null);
        setIsLoggedIn(false);

        try {
            const response = await api.get("logout");
        } catch (err) {
            console.log(err);
            alert("Network error.");
        }
    };

    // ? Add user credentials to the database
    const signUpUser = async (userData: LoginDetails): Promise<void> => {
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
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export default UserProvider;
