import { MdEdit } from "react-icons/md";

interface BioInterface {
    bioInfo: Bio;
}

const Bio = ({ bioInfo }: BioInterface) => {
    return (
        <div className="flex gap-2 w-full h-[120px] ">
            {bioInfo.ProfilePic === "" ? (
                <div className="h-[80px] w-[120px] border rounded-xl flex justify-center items-center hover:bg-slate-700 cursor-pointer transition">
                    <p className="text-xs text-slate-300 text-center">
                        Upload Picture...
                    </p>
                </div>
            ) : (
                <img
                    src={bioInfo.ProfilePic}
                    className="h-[80px] w-[120px] rounded-xl"
                />
            )}

            <div className="flex flex-col w-full">
                <div className="flex justify-between">
                    <p className="font-bold text-slate-300 max-h-[60px] overflow-y-auto  w-5/6">
                        {bioInfo.FirstName} {bioInfo.LastName}
                    </p>
                    <MdEdit className="text-2xl text-slate-300 w-1/6" />
                </div>
                <div className="flex flex-col overflow-y-auto">
                    <p className="text-slate-300 text-sm">
                        Masters in COmputer Science in Aritfitial Intelligence
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
