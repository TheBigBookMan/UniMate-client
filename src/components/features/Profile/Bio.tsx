import { MdEdit } from "react-icons/md";
import Popup from "../../common/Elements/Popup";
import { useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

interface BioInterface {
    bioInfo: Bio;
}

const Bio = ({ bioInfo }: BioInterface) => {
    const [uploadProfilePicModal, setUploadProfilePicModal] =
        useState<boolean>(false);
    const [uploadedProfilePic, setUploadedProfilePic] = useState<string>("");
    const [uploadLoading, setUploadLoading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        if (file) {
            const fileType = file.type;
            if (fileType.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setUploadedProfilePic(reader.result as string);
                };
                reader.readAsDataURL(file);
                setSelectedFile(file);
            } else {
                alert("Please upload a valid image file.");
            }
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const uploadProfilePic = async () => {
        if (!selectedFile) {
            alert("No file selected.");
            return;
        }

        setUploadLoading(true);
        try {
            console.log(selectedFile);
            const formData = new FormData();
            formData.append("file", selectedFile);
            // TODO upload to S3 bucket

            // const response = await fetch('https://your-backend-url/upload', {
            //     method: 'POST',
            //     body: formData,
            // });

            // if (!response.ok) {
            //     throw new Error('Failed to upload image');
            // }

            // // Handle the response from your backend if necessary
            // const data = await response.json();
            // console.log(data);

            setUploadLoading(false);
        } catch (err) {
            console.log(err);
            alert("Network error.");
            setUploadLoading(false);
        }
    };

    return (
        <div className="flex gap-2 w-full h-[120px] ">
            <Popup
                isOpen={uploadProfilePicModal}
                onClose={() => setUploadProfilePicModal(false)}
                title="Upload Profile Picture"
            >
                <div className="flex flex-col  gap-2 p-2">
                    {uploadedProfilePic === "" ? (
                        <div className="h-[300px] w-full border border-slate-500 rounded-lg flex justify-center items-center">
                            <p>Upload image...</p>
                        </div>
                    ) : (
                        <div className="h-[300px] w-full border">
                            <img
                                src={uploadedProfilePic}
                                alt="Uploaded Profile"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                    )}

                    <div className="flex flex-col ">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-[120px]"
                            onClick={handleButtonClick}
                        >
                            Select File
                        </button>
                    </div>

                    <div className="w-full flex justify-center ">
                        <button
                            onClick={uploadProfilePic}
                            className="flex items-center justify-center w-[180px] h-[40px] rounded-lg bg-slate-700 hover:bg-slate-600 cursor-pointer"
                        >
                            {uploadLoading ? (
                                <div className="flex justify-center items-center">
                                    <RotatingLines
                                        width="20"
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                    />
                                </div>
                            ) : (
                                <p className="text-white">Upload</p>
                            )}
                        </button>
                    </div>
                </div>
            </Popup>

            {bioInfo.ProfilePic === "" ? (
                <div
                    onClick={() => setUploadProfilePicModal(true)}
                    className="h-[80px] w-[120px] border rounded-xl flex justify-center items-center hover:bg-slate-700 cursor-pointer transition"
                >
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
