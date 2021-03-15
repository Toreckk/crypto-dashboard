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