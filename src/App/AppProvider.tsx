import React, { createContext, useState, FC } from "react";

type ContextStateTypes = {
    page: String,
    firstVisit: Boolean,
    setFirstVisit: (firstVisit: Boolean)=>void,
    setPage: (page: String)=> void
}

const confirmFavorites: any  = () => {
    return {
        firstVisit: false,
        page: 'dashboard',
    }
}

const savedSettings: any = () =>{
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash') || '{}');
    console.log(localStorage.getItem('cryptoDash') === null);
    if(localStorage.getItem('cryptoDash') === null){
        return {
            page: 'settings',
            firstVisit: true
        } 
    }
    return {};
}

const AppContextDefaultValues: ContextStateTypes = {
    page: "dashboard",
    firstVisit: false,
    ...savedSettings()

};

export const AppContext = createContext<ContextStateTypes>(AppContextDefaultValues);

const AppProvider: FC = ({children}) => {
    const [page, setPage] = useState(AppContextDefaultValues.page);
    const [firstVisit, setFirstVisit] = useState(AppContextDefaultValues.firstVisit);
    console.log(`page: ${page} firstVisit:${firstVisit}`);
    

    return (
        <AppContext.Provider value={{page, setPage, firstVisit, setFirstVisit}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;