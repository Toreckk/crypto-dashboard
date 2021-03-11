import React from 'react';
import { AppContext } from '../App/AppProvider';
import { ICoinProp } from '../Types/Types';
import _ from "lodash";
import fuzzy from 'fuzzy';
import "./Search.scss";

const handleFilter = _.debounce((inputValue: string, coinList: ICoinProp[], setFilteredCoins: (filteredCoins: ICoinProp[]) => void)=>{
    //Get all the coin symbols
    let coinSymbols = Object.keys(coinList);
    //Get all the coin names, map symbol to name
    let coinNames = coinSymbols.map((symbol:any)=> coinList[symbol].CoinName);
    let allStringsToSearch = [...coinSymbols, ...coinNames];
    let results = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);
    
    let filteredCoins = _.pickBy(coinList, (result, symKey) =>{
        let coinName = result.CoinName;
        return (_.includes(results, symKey) || _.includes(results, coinName));
    })   
    setFilteredCoins(Object.values(filteredCoins));
}, 500); 

const filterCoins = (e: React.ChangeEvent<HTMLInputElement>,
     setFilteredCoins: (filteredCoins: ICoinProp[]) => void, coinList: ICoinProp[]) => {
        e.preventDefault();
        let inputValue = e.target.value;
        if(!inputValue || inputValue === "") setFilteredCoins([]);
        handleFilter(inputValue, coinList, setFilteredCoins);
}

export const Search = () =>{
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList})=>
                <div className="search-grid">
                    <h2>Search all coins</h2>
                    <input className="search-input" onChange={(e)=> filterCoins(e, setFilteredCoins, coinList)}/>
                </div>
            }
        </AppContext.Consumer>
        
    );
}