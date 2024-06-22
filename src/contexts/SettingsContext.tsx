import { createContext, useState, useEffect, ReactNode, FC } from "react";
import { api } from "./../utils/api";

interface SettingsContextInterface {
    value: string;
}

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsContext = createContext<
    SettingsContextInterface | undefined
>(undefined);

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>("");
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
