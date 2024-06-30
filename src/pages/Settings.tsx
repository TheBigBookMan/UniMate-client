import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import useUserContext from "../hooks/useUserContext";

const Settings = () => {
    const { logout } = useUserContext();
    const [selectedSettings, setSelectedSettings] = useState<string>("");

    return (
        <div className="flex flex-col h-full w-full gap-2">
            <div className="flex justify-between items-center pr-2">
                <p className="text-lg text-slate-400 font-bold">Settings</p>

                {selectedSettings !== "" && (
                    <div className="w-[28px] h-[28px] rounded-lg  bg-slate-400 flex items-center justify-center cursor-pointer hover:bg-slate-500 transition">
                        <FaAngleLeft className="text-xl" />
                    </div>
                )}
            </div>

            <ul className="flex flex-col h-full w-full">
                <div
                    onClick={logout}
                    className="cursor-pointer hover:bg-rose-500 flex justify-center gap-4 h-[40px] bg-rose-600 rounded-lg border-red-400 items-center px-8"
                >
                    <p className="text-xl text-slate-200">Logout</p>
                    <RiLogoutBoxLine className="text-xl text-slate-200 font-bold" />
                </div>
            </ul>
        </div>
    );
};

export default Settings;
