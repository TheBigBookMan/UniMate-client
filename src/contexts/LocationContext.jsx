import { createContext, useState, useEffect } from "react";
import { api } from "./../utils/api";

export const LocationContext = createContext();

const LocationProvider = ({ children }) => {
    return <LocationContext.Provider>{children}</LocationContext.Provider>;
};

export default LocationProvider;
