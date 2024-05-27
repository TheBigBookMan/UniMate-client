import Me from "../images/close.jpg";
import { MdEdit } from "react-icons/md";

const Profile = () => {
    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            <div className="flex gap-2 w-full h-[120px] ">
                <img src={Me} className="h-full rounded-xl" />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <p className="font-bold text-slate-300 max-h-[60px] overflow-y-auto  w-5/6">
                            Ben Smerd
                        </p>
                        <MdEdit className="text-2xl text-slate-300 w-1/6" />
                    </div>
                    <div className="flex flex-col overflow-y-auto">
                        <p className="text-slate-300 text-sm">
                            Masters in COmputer Science in Aritfitial
                            Intelligence
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
