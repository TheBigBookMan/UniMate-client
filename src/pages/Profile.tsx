import Bio from "../components/features/Profile/Bio";
import { useState, useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import { api } from "../utils/api";
import { RotatingLines } from "react-loader-spinner";

const Profile = () => {
    const { user } = useUserContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [bioInfo, setBioInfo] = useState<Bio>({
        FirstName: "",
        LastName: "",
        ProfilePic: "",
        UniEmail: "",
    });

    const getProfileInfo = async () => {
        if (!user) return;

        const { StudentId } = user;
        setIsLoading(true);

        try {
            const response = await api.get(`/api/profile/${StudentId}`);
            if (response.status === 200) {
                const data = response.data;
                setBioInfo({
                    FirstName: data.firstName,
                    LastName: data.lastName,
                    ProfilePic: data.profilePic,
                    UniEmail: data.uniEmail,
                });
                setIsLoading(false);
            } else {
                console.log(response);
                alert(`Error: ${response.status}- ${response.statusText}`);
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
            alert("Network error.");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!user) return;
        if (user.StudentId !== "") {
            getProfileInfo();
        }
    }, [user]);

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto">
            {!isLoading ? (
                bioInfo && <Bio bioInfo={bioInfo} />
            ) : (
                <div className="flex items-center justify-center w-full h-full">
                    <RotatingLines
                        visible={isLoading}
                        width="40"
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                    />
                </div>
            )}
        </div>
    );
};

export default Profile;
