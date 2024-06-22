import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
    const { login } = useContext(UserContext);
    const [loginDetails, setLoginDetails] = useState<LoginDetails>({
        uni: "",
        username: "",
        password: "",
    });

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
                        <p className="text-slate-300">Student Email</p>
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
                        onClick={() => login({ ...loginDetails })}
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
