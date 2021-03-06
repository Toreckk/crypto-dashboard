export interface ICoinProp {
    CoinName: String,
    ImageUrl: String,
    Symbol: String

}

export interface IPriceProp{
    FROMSYMBOL: String,
    CHANGEPCT24HOUR: number,
    PRICE: number,
    [x: string]: any,

}

export interface historicalType {
    name: String,
    data: any[][]
}

export interface ContextStateTypes {
    page: String,
    firstVisit: Boolean,
    coinList: ICoinProp[],
    favorites: String[],
    currentFavorite: String,
    filteredCoins: ICoinProp[],
    prices: IPriceProp[],
    historical: historicalType[],
    chartSelect: string,
    setFirstVisit: (firstVisit: Boolean)=>void,
    setPage: (page: String)=> void,
    setFavorites: (newFavorites: String[]) => void,
    setFilteredCoins: (filteredCoins: ICoinProp[]) => void,
    setPrices: (newPrices: IPriceProp[])=> void,
    setCurrentFavorite: (newFavorite: String)=> void,
    setHistorical: (newHistorical: historicalType[]) => void,
    setChartSelect: (newChartSelect: string)=> void


}