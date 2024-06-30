import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { api } from "./../utils/api";
import { useNavigate } from "react-router-dom";
import { getCookie, getCookies } from "../utils/getCookies";

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextInterface | undefined>(
    undefined
);

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    // !!! TEMP
    // const [user, setUser] = useState(null);
    // const [user, setUser] = useState<User | null>(null);
    const [user, setUser] = useState<User | null>({
        University: "Fun University",
        Username: "Smerdy",
        StudentId: "14",
        Email: "bensmerd@fununi.edu.au",
        UniStudentId: "8",
    });

    // !!! TEMP FOR DEV
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const nav = useNavigate();

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
                    const {
                        studentId,
                        uniEmail,
                        uniStudentId,
                        completeOnboard,
                    } = data;
                    setUser({
                        University: uni,
                        Username: username,
                        StudentId: studentId,
                        Email: uniEmail,
                        UniStudentId: uniStudentId,
                        CompleteOnboard: completeOnboard,
                    });
                    setIsLoggedIn(true);
                    nav("/");
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
        console.log("logout");
        // try {
        //     // const response = await api.get("logout");

        //     setUser(null);
        //     setIsLoggedIn(false);
        // } catch (err) {
        //     console.log(err);
        //     alert("Network error.");
        // }
    };

    const verifyUserSession = async (): Promise<void> => {
        const cookies = await getCookies();
        let universityNameCookie;
        let usernameCookie;

        cookies.forEach((cookie) => {
            if (cookie["name"] === "UniversityName") {
                universityNameCookie = cookie["value"];
            } else if (cookie["name"] === "StudentUsername") {
                usernameCookie = cookie["value"];
            }
        });

        if (!universityNameCookie || !usernameCookie) {
            setIsLoggedIn(false);
            nav("/login");
        } else {
            const formData = {
                username: usernameCookie,
                universityName: universityNameCookie,
            };

            try {
                const response = await api.post("/api/auth/check-login", {
                    ...formData,
                });

                if (response.status === 200) {
                    console.log(response.data);
                    const { studentId, uniEmail, uniStudentId } = response.data;

                    setUser({
                        University: universityNameCookie,
                        Username: usernameCookie,
                        StudentId: studentId,
                        Email: uniEmail,
                        UniStudentId: uniStudentId,
                    });

                    setIsLoggedIn(true);
                    nav("/");
                } else {
                    console.log(response.data);
                    setIsLoggedIn(false);
                    nav("/login");
                }
            } catch (err) {
                console.log(err);
                alert("Network error.");
                setIsLoggedIn(false);
                nav("/login");
            }
        }
    };

    const value = { user, login, logout, isLoggedIn };

    useEffect(() => {
        // verifyUserSession();
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export default UserProvider;
