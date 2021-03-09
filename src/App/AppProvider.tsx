import React, { createContext, useState, FC } from "react";

type ContextStateTypes = {
    page: String
}

const AppContextDefaultValues: ContextStateTypes = {
    page: "dashboard"
};

export const AppContext = createContext<ContextStateTypes>(AppContextDefaultValues);

const AppProvider: FC = ({children}) => {
    const [page, setPage] = useState<String>(AppContextDefaultValues.page);

    return (
        <AppContext.Provider value={{page}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;