import { FC, ReactNode, useEffect } from "react";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string;
}

const Popup: FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-8"
            onClick={onClose}
        >
            <div
                className=" bg-slate-300 rounded-lg shadow-lg max-w-md w-full px-2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center">
                    <p className="text-lg">{title}</p>
                    <button
                        className="text-3xl text-gray-500 hover:text-gray-700 flex items-center justify-center"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Popup;
