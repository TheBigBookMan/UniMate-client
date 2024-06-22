import { clubslist } from "../../../utils/tests/clubslist";
import CLUB from "../../../images/club.png";

const ClubsList = () => {
    return (
        <ul className="flex flex-col gap-1 overflow-y-auto h-full w-full">
            {clubslist &&
                clubslist.map((club) => (
                    <li
                        key={club.name}
                        className="flex gap-1  rounded-lg h-[80px] border border-slate-500 p-1"
                    >
                        <img src={CLUB} className="h-full rounded-lg" />
                        <div className="flex flex-col">
                            <p className="text-slate-300 text-sm">
                                {club.name}
                            </p>
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default ClubsList;
