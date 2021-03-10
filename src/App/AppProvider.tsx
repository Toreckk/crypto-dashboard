import React, { createContext, useState, FC, useEffect } from "react";
import {ICoinProp} from "../Types/Types";
const file = require("../tokens.json");
const cc = require('cryptocompare');
cc.setApiKey(file["CC_API_KEY"]);



const savedSettings: any = () =>{
    // let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash') || '{}');
    console.log(localStorage.getItem('cryptoDash') === null);
    if(localStorage.getItem('cryptoDash') === null){
        return {
            page: 'settings',
            firstVisit: true
        } 
    }
    return {};
}



type ContextStateTypes = {
    page: String,
    firstVisit: Boolean,
    coinList: [ICoinProp],
    setFirstVisit: (firstVisit: Boolean)=>void,
    setPage: (page: String)=> void
}

const AppContextDefaultValues: ContextStateTypes = {
    page: "dashboard",
    firstVisit: false,
    coinList: [],
    ...savedSettings()

};

export const AppContext = createContext<ContextStateTypes>(AppContextDefaultValues);

const AppProvider: FC = ({children}) => {
    const [page, setPage] = useState(AppContextDefaultValues.page);
    const [firstVisit, setFirstVisit] = useState(AppContextDefaultValues.firstVisit);
    const [coinList, setCoinList] = useState(AppContextDefaultValues.coinList);

    useEffect(() => {
        const fetchCoins = async () => {
            setCoinList((await cc.coinList()).Data);
        }
        fetchCoins();
    }, []);

    console.log(page, firstVisit);

    return (
        <AppContext.Provider value={{page, setPage, firstVisit, setFirstVisit, coinList}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;