import React, { createContext, useState, FC, useEffect } from "react";
import {ICoinProp} from "../Types/Types";
const file = require("../tokens.json");
const cc = require('cryptocompare');
cc.setApiKey(file["CC_API_KEY"]);



const savedSettings: any = () =>{
    if(localStorage.getItem('cryptoDash') === null){
        return {
            page: 'settings',
            firstVisit: true
        } 
    }
    let {favorites} = JSON.parse(localStorage.getItem('cryptoDash') || '{}');
    return {favorites};
}

type ContextStateTypes = {
    page: String,
    firstVisit: Boolean,
    coinList: ICoinProp[],
    favorites: String[],
    filteredCoins: ICoinProp[],
    setFirstVisit: (firstVisit: Boolean)=>void,
    setPage: (page: String)=> void,
    setFavorites: (newFavorites: String[]) => void,
    setFilteredCoins: (filteredCoins: ICoinProp[]) => void
}

const AppContextDefaultValues: ContextStateTypes = {
    page: "dashboard",
    firstVisit: false,
    coinList: [],
    favorites:["BTC","ETH","XMR","DOGE"],
    filteredCoins: [],
    ...savedSettings()

};

export const AppContext = createContext<ContextStateTypes>(AppContextDefaultValues);

const AppProvider: FC = ({children}) => {
    const [page, setPage] = useState(AppContextDefaultValues.page);
    const [firstVisit, setFirstVisit] = useState(AppContextDefaultValues.firstVisit);
    const [coinList, setCoinList] = useState<ICoinProp[]>([]);
    const [favorites, setFavorites] = useState(AppContextDefaultValues.favorites);
    const [filteredCoins, setFilteredCoins] = useState<ICoinProp[]>([]);

    useEffect(() => {
        const fetchCoins = async () => {
            setCoinList((await cc.coinList()).Data);
        }
        fetchCoins();
        
    },[]);
    return (
        <AppContext.Provider value={{page, setPage, firstVisit, setFirstVisit,
         favorites, setFavorites, coinList, filteredCoins, setFilteredCoins}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;