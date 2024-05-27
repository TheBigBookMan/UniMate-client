import { useState } from "react";
import ClubsList from "../components/features/Clubs/ClubsList";
import SelectedClub from "../components/features/Clubs/SelectedClub";

const Clubs = () => {
    const [category, setCategory] = useState("All");
    const [selectedClub, setSelectedClub] = useState(null);

    return (
        <div className="flex flex-col h-full w-full gap-2">
            <div className="flex justify-between">
                <p className="text-lg text-slate-300">Clubs</p>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-[220px] rounded-lg border border-slate-300 outline-none pl-1"
                >
                    <option value="All">All</option>
                    <option value="Sport">Sport</option>
                    <option value="Music">Music</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Games">Games</option>
                </select>
            </div>

            {selectedClub ? <SelectedClub /> : <ClubsList />}
        </div>
    );
};

export default Clubs;
