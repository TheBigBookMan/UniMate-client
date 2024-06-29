import { useState } from "react";
import useUserContext from "../hooks/useUserContext";

const Login = () => {
    const { login } = useUserContext();
    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        uni: "",
        username: "",
        password: "",
    });

    const checkLogin = async () => {
        if (loginDetails.uni === "") {
            alert("You need to enter your University name");
            return;
        }

        if (loginDetails.username === "") {
            alert("You need to enter your username");
            return;
        }

        const loginResponse = await login({ ...loginDetails });

        console.log(loginResponse);
    };

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="flex flex-col gap-12 text-center p-12">
                <p className="text-red-500 text-3xl">
                    Welcome to UniMates, please login with your University!
                </p>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-start flex-col">
                        <p className="text-slate-300">University</p>
                        <input
                            type="text"
                            value={loginDetails.uni}
                            onChange={(e) =>
                                setLoginDetails({
                                    ...loginDetails,
                                    uni: e.target.value,
                                })
                            }
                            className="w-[240px] h-[30px] rounded-lg border border-slate-300 pl-2 outline-none"
                        />
                    </div>
                    <div className="flex items-start flex-col">
                        <p className="text-slate-300">Username</p>
                        <input
                            type="text"
                            value={loginDetails.username}
                            onChange={(e) =>
                                setLoginDetails({
                                    ...loginDetails,
                                    username: e.target.value,
                                })
                            }
                            className="w-[240px] h-[30px] rounded-lg border border-slate-300 pl-2 outline-none"
                        />
                    </div>
                    <div className="flex items-start flex-col">
                        <p className="text-slate-300">Password</p>
                        <input
                            type="text"
                            value={loginDetails.password}
                            onChange={(e) =>
                                setLoginDetails({
                                    ...loginDetails,
                                    password: e.target.value,
                                })
                            }
                            className="w-[240px] h-[30px] rounded-lg border border-slate-300 pl-2 outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col  items-center">
                    <button
                        onClick={() => checkLogin()}
                        className="w-[160px] h-[30px] bg-emerald-500 rounded-lg"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
