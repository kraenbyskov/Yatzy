import React, { createContext, useMemo, useState } from "react";

export const DicesContext = createContext();

export const DicesProvider = ({ children }) => {
    const [GetData, setGetData] = useState([0]);

    const value = useMemo(() => ({ GetData, setGetData }), [GetData, setGetData]);

    return (
        <DicesContext.Provider value={value}>
            {children}
        </DicesContext.Provider>
    );
};
