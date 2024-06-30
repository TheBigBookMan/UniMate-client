import flinders from "../../../images/flinders.png";
import { FaMessage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";

const Header = () => {
    const { pathname } = useLocation();
    const { user } = useUserContext();

    return (
        <div className="border-b-slate-700 border-b p-1 h-[50px] flex justify-between">
            {user && (
                <div className="flex gap-2 items-center h-full w-4/6">
                    <Link to="/">
                        <img src={flinders} className="w-12 rounded-lg" />
                    </Link>
                    <p className="text-slate-300 text-sm">{user.University}</p>
                </div>
            )}
            <div className="w-2/6 flex gap-4 pr-2 items-center justify-end">
                <Link
                    to="/messages"
                    className={`${
                        pathname === "/messages" &&
                        "bg-slate-200 rounded-lg p-1"
                    }`}
                >
                    <FaMessage
                        className={`text-xl  cursor-pointer ${
                            pathname === "/messages"
                                ? "text-slate-500"
                                : "text-slate-300 hover:text-slate-500"
                        }`}
                    />
                </Link>
                <Link
                    to="/notifications"
                    className={`${
                        pathname === "/notifications" &&
                        "bg-slate-200 rounded-lg p-1"
                    }`}
                >
                    <FaBell
                        className={`text-xl  cursor-pointer ${
                            pathname === "/notifications"
                                ? "text-slate-500"
                                : "text-slate-300 hover:text-slate-500"
                        }`}
                    />
                </Link>
                <Link
                    to="/settings"
                    className={`${
                        pathname === "/settings" &&
                        "bg-slate-200 rounded-lg p-1"
                    }`}
                >
                    <IoSettingsSharp
                        className={`text-xl  cursor-pointer ${
                            pathname === "/settings"
                                ? "text-slate-500"
                                : "text-slate-300 hover:text-slate-500"
                        }`}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Header;
