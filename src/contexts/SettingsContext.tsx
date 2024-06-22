import { createContext, useState, useEffect } from "react";
import { api } from "./../utils/api";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const [value, setValue] = useState("");
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
