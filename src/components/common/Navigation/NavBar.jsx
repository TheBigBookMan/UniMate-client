import { IoHomeSharp, IoPersonSharp, IoPeopleSharp } from "react-icons/io5";
import { IoIosSchool, IoMdTrophy } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const NavBar = () => {
    const { pathname } = useLocation();

    return (
        <div className="border-t h-[50px] border-slate-700 flex justify-around items-center">
            <Link
                to="/"
                className={`${
                    pathname === "/" && "bg-slate-200 rounded-lg p-1"
                }`}
            >
                <IoHomeSharp
                    className={`text-2xl  ${
                        pathname === "/"
                            ? "text-slate-500"
                            : "text-slate-300 hover:text-slate-500"
                    }`}
                />
            </Link>
            <Link
                to="/uni"
                className={`${
                    pathname === "/uni" && "bg-slate-200 rounded-lg p-1"
                }`}
            >
                <IoIosSchool
                    className={`text-2xl  ${
                        pathname === "/uni"
                            ? "text-slate-500"
                            : "text-slate-300 hover:text-slate-500"
                    }`}
                />
            </Link>
            <Link
                to="/profile"
                className={`${
                    pathname === "/profile" && "bg-slate-200 rounded-lg p-1"
                }`}
            >
                <IoPersonSharp
                    className={`text-2xl  ${
                        pathname === "/profile"
                            ? "text-slate-500"
                            : "text-slate-300 hover:text-slate-500"
                    }`}
                />
            </Link>
            <Link
                to="/clubs"
                className={`${
                    pathname === "/clubs" && "bg-slate-200 rounded-lg p-1"
                }`}
            >
                <IoMdTrophy
                    className={`text-2xl  ${
                        pathname === "/clubs"
                            ? "text-slate-500"
                            : "text-slate-300 hover:text-slate-500"
                    }`}
                />
            </Link>
            <Link
                to="/friends"
                className={`${
                    pathname === "/friends" && "bg-slate-200 rounded-lg p-1"
                }`}
            >
                <IoPeopleSharp
                    className={`text-2xl  ${
                        pathname === "/friends"
                            ? "text-slate-500"
                            : "text-slate-300 hover:text-slate-500"
                    }`}
                />
            </Link>
            <Link
                to="/calendar"
                className={`${
                    pathname === "/calendar" && "bg-slate-200 rounded-lg p-1"
                }`}
            >
                <FaCalendarAlt
                    className={`text-2xl  ${
                        pathname === "/calendar"
                            ? "text-slate-500"
                            : "text-slate-300 hover:text-slate-500"
                    }`}
                />
            </Link>
        </div>
    );
};

export default NavBar;
