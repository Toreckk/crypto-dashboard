import React, { createContext, useState, FC, useEffect } from "react";
import {ICoinProp, IPriceProp} from "../Types/Types";
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
    prices: IPriceProp[],
    setFirstVisit: (firstVisit: Boolean)=>void,
    setPage: (page: String)=> void,
    setFavorites: (newFavorites: String[]) => void,
    setFilteredCoins: (filteredCoins: ICoinProp[]) => void,
    setPrices: (newPrices: IPriceProp[])=> void,
}

const AppContextDefaultValues: ContextStateTypes = {
    page: "dashboard",
    firstVisit: false,
    coinList: [],
    favorites:["BTC","ETH","XMR","DOGE"],
    filteredCoins: [],
    prices: [],
    ...savedSettings()

};

export const AppContext = createContext<ContextStateTypes>(AppContextDefaultValues);

const AppProvider: FC = ({children}) => {
    const [page, setPage] = useState(AppContextDefaultValues.page);
    const [firstVisit, setFirstVisit] = useState(AppContextDefaultValues.firstVisit);
    const [coinList, setCoinList] = useState<ICoinProp[]>([]);
    const [favorites, setFavorites] = useState(AppContextDefaultValues.favorites);
    const [filteredCoins, setFilteredCoins] = useState<ICoinProp[]>([]);
    const [prices, setPrices] = useState<IPriceProp[]>([]);

    useEffect(() => {
        const fetchCoins = async () => {
            setCoinList((await cc.coinList()).Data);
        }
        const fetchPrices = async () => {
            let returnData: IPriceProp[] = [];
            for(let i = 0; i<favorites.length;i++){
                try{
                    let returnedPrice = await cc.priceFull(favorites[i], 'USD');
                    let coinPrice: IPriceProp = returnedPrice[favorites[i].toString()]["USD"];
                    returnData.push(coinPrice);
                }catch(e){
                    console.warn(`Fetch price error: ${e}`);
                }
            }
            setPrices(returnData);
        }

        fetchCoins();
        fetchPrices();
        
    },[]);
    return (
        <AppContext.Provider value={{page, setPage, firstVisit, setFirstVisit,
         favorites, setFavorites, coinList, filteredCoins, setFilteredCoins, prices, setPrices}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;